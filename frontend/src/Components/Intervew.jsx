import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import TypewriterEffect from "./TypewritterEffect";
export const Intervew = ({numQuestions,technology,difficultyLevel}) => {
    const [data,setdata]=useState("")
    const [responseData, setResponseData] = useState('');
    const [flag,setflag]=useState(false)
    const [course,setcoures]=useState("")
    const [level,setlevel]=useState("")
    const handlesubmitform=(e)=>{
e.preventDefault()
let resdata=`can you Take my Interview i am a ${technology} developer can you ask me 10 question of ${difficultyLevel} level and number of question is ${numQuestions}?`
setdata(resdata)
setcoures("")
setlevel("")
    }

    function fetchfun(){
        return   axios.post("http://localhost:4200/ask",{message:data})
          .then((res)=>{
            console.log(res)
            setResponseData(res.data.completion.content)
          })
          .catch((err)=>console.log(err))
        }

        const handlesubmit=(e)=>{
          if(responseData){
            setflag(false)
          }
      e.preventDefault()
      fetchfun().then(()=>{
        setflag(true)
        setdata("")
      })
      
        }

        
      
  return (
    <div>
       <Box>
 <Text>Give Interviwe according to you</Text>
 <Box mt={"5"}>
 <form onSubmit={handlesubmitform}>
    <select value={course} onChange={(e)=>setcoures(e.target.value)} >
        <option value="">Select Your Course</option>
        <option value="mern">MERN</option>
        <option value="jave">JAVA</option>
        <option value="node">NODE</option>
    </select>
    <br /> <br />
    <select value={level} onChange={(e)=>setlevel(e.target.value)}>
        <option value="">Select Your Level</option>
        <option value="Basic">Basic</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
    </select>
    <br /> <br />
    <input type="submit" />
 </form>
 </Box>
</Box>

{/* Open ai input */}
<form onSubmit={handlesubmit}>
        <input  value={data} name='data' type='text' placeholder='Ask Here' style={{width:"40%",height:"40px",margin:"20px"}} />
        <Button colorScheme='teal' variant='outline'><input type='submit' /></Button>
      </form>
      <hr></hr>
 {flag ? <TypewriterEffect data={responseData} />  : data ?<Text fontSize={{base:"21px",md:"50px"}} color={"red.200"}>Wait few Sec after Clicking😁</Text> :""}
    </div>
  )
}
