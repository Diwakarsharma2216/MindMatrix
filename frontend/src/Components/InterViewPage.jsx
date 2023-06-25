import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, {  useContext, useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { QaContex } from '../Contex/QAContex';
import { useNavigate } from "react-router-dom"


const InterViewPage = () => {
  const {questiondata,setfeedbackdata}=useContext(QaContex)
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  
  let data=[]


  if(questiondata && questiondata.length>0){

  let data2=questiondata?.split("\n")
    localStorage.setItem("ArrayOfQuestion",JSON.stringify(data2))
  }

  let data1=JSON.parse(localStorage.getItem("ArrayOfQuestion"))
  console.log(data1)
 if(data1){
 for(let key in data1){
  console.log(data1[key])
  if(data1.length>10){
    if(key>=data1.length-10){
      let obj={questions:data1[key],answer:""}
      data.push(obj)
    }
  }
  else{
    let obj={questions:data1[key],answer:""}
    data.push(obj)
  }
  if(questions.length==0){
 
    // setQuestions1(newData1)
   
    setQuestions(data)
   
  }

 }
 console.log(data)
 }
 console.log(questions[0])
  


  const [questionNumber, setQuestionNumber] = useState(0);
  const [count, setCount] = useState(10);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(intervalId);
      setIntervalId(null);
      setCount(10);
      SpeechRecognition.stopListening();
      handleAnswerChange(questionNumber, transcript); 

      if (questionNumber < questions.length - 1) {
        setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1); 
        resetTranscript(); 
        startTimer(); 
      }
    //  console.log(questions)
     
    }
  }, [count]);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount((prevCounter) => prevCounter - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleAnswerChange = (questionNumber, answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionNumber].answer = answer;
    setQuestions(updatedQuestions);
  };

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true });
    startTimer();
  };

  // const handleStop = () => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //     setIntervalId(null);
  //     setCount(10);
  //   }
  //   SpeechRecognition.stopListening();
  //   handleAnswerChange(questionNumber, transcript);
  
  //   if (questionNumber < questions.length - 1) {
  //     setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1); 
  //     resetTranscript(); 
  //     handleAnswerChange(questionNumber, ''); 
  //   }
  // };
  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleclickfinal=()=>{
console.log(questions)
let feedbackdata=`I provide you an array of a objects in which there is a question and answer please tell us about the answer it is bad good moderate like this and also give us some feedback about our answer where we have to work and which thing is good about our answer   ${JSON.stringify(questions)} `
 axios.post("http://localhost:4200/ask",{message:feedbackdata}).then((res)=>{
  console.log(res)
  console.log(res.data.completion.content)
  setfeedbackdata(res.data.completion.content)
 }).catch((err)=>{
  console.log(err)
 })
 navigate("/feedback")

  }
// console.log(questions[questionNumber])
// console.log(questions.length)
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
 {questions.length>1&& <div className="bg-white p-6 rounded shadow-lg">
      <p className="mb-2">Microphone: {listening ? 'on' : 'off'}</p>
      <p className="mb-2">{count}</p>
      <p className="mb-2 text-lg">{questions[questionNumber]?
      questions[questionNumber].questions:"please wait "}</p>
      <p className="mb-2">User's Answer: {transcript}</p>
      <input
        className="mb-2 p-2 border border-gray-400 rounded"
        type="text"
        value={questions[questionNumber]?.answer}
        onChange={(event) => handleAnswerChange(questionNumber, event.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleStart}
      >
        Start
</button>
<Button onClick={handleclickfinal}>
  Final submission
</Button>
    </div>
 }

  </div>
      );
};

export default InterViewPage;




