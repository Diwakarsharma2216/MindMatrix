const express=require("express")
const {Configuration,OpenAIApi} =require("openai")

const {userRouter} = require("./routers/userrote")
const {authenticate}=require("./middlewear/authentication")
const interviewRoutes = require('./routers/interviews');



const {connection}=require("./db")




const bodyParser =require("body-parser")
require("dotenv").config()
const cors=require('cors')


const configuration=new Configuration({
    organization:process.env.organization,
	apiKey:process.env.apiKey,
})

const openai=new OpenAIApi(configuration)

const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

app.use('/interviews', interviewRoutes);

// app.use(authenticate)


app.get("/",(req,res)=>{
    res.send("welcome to mindmatrix")
})

// ##### OpenAi 😊 ########
app.post("/ask", async (req, res) => {

	const { message } = req.body;
try {
    // this message
    console.log(message)
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{role:"user",content:`${message}`}
		]
	})

	res.json({
		completion: completion.data.choices[0].message
	})
} catch (error) {
    res.send(error.message)
}
	
});

//git Oauth
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/",(req,res)=>{
    res.send("route start")
})

//login
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.get("/auth/github",async(req,res)=>{
    const code=req.query
    console.log(code) 
    const accessToken=await fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        },
        body : JSON.stringify({
            client_id:process.env.client_id,
            client_secret:process.env.client_secret,
            code
        })
    }).then((res)=> res.json())
     const user=await fetch("https://api.github.com/user",{
        headers:{
           Authorization:`Bearer ${accessToken.access_token}` 
        }
     }).then((res)=> res.json())
     .catch((err)=> console.log(err)) 
        
    console.log(user)
    res.send("sign in with github success")
})




app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected with database")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at ${process.env.PORT} port `)
})