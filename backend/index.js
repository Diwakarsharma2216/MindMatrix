const express=require("express")
const {Configuration,OpenAIApi} =require("openai")

const {userRouter} = require("./routers/userrote")
const {authenticate}=require("./middlewear/authentication")

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

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected with database")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at ${process.env.PORT} port `)
})