const express=require("express")
const {Configuration,OpenAIApi} =require("openai")
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


app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at ${process.env.PORT}`)
})