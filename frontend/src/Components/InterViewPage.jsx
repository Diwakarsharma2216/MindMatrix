import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const InterViewPage = () => {
  const [questions, setQuestions] = useState([
    { question: 'What is the best way to update an array of strings in React state?', answer: '' },
    { question: 'How do you handle forms in React?', answer: '' },  { question: 'What are React hooks?', answer: '' },
    { question: 'How does React handle component lifecycle?', answer: '' },
    { question: 'What is JSX in React?', answer: '' },
    { question: 'What is the difference between state and props in React?', answer: '' },
    { question: 'How do you perform side effects in React?', answer: '' },
    { question: 'What is the purpose of key prop in React?', answer: '' },
    { question: 'How do you handle errors in React components?', answer: '' },
    { question: 'What is React Router and how does it work?', answer: '' },
  ]);

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
      console.log(questions)
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

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setCount(10);
    }
    SpeechRecognition.stopListening();
    handleAnswerChange(questionNumber, transcript);
  
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1); 
      resetTranscript(); 
      handleAnswerChange(questionNumber, ''); 
    }
  };
  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
  <div className="bg-white p-6 rounded shadow-lg">
      <p className="mb-2">Microphone: {listening ? 'on' : 'off'}</p>
      <p className="mb-2">{count}</p>
      <p className="mb-2 text-lg">{questions[questionNumber].question}</p>
      <p className="mb-2">User's Answer: {transcript}</p>
      <input
        className="mb-2 p-2 border border-gray-400 rounded"
        type="text"
        value={questions[questionNumber].answer}
        onChange={(event) => handleAnswerChange(questionNumber, event.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleStart}
      >
        Start
</button>
    </div>
  </div>
      );
};

export default InterViewPage;
