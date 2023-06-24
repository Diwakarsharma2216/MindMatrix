import React, { useState } from 'react';
import { Intervew } from './Intervew';

const PracticeInterview = () => {
  const [interviewType, setInterviewType] = useState('');
  const [technology, setTechnology] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

  const handleStartInterview = () => {
    // Code to start the interview session with the selected parameters
    console.log('Starting interview...');
  };

  const handleLogout = () => {
    // Code to handle logout
    console.log('Logging out...');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-6">InterviewPrep</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Practice Interview</h2>
      <div className="mb-4">
        <label htmlFor="interviewType" className="mr-2 text-white">Select Interview Type:</label>
        <select
          id="interviewType"
          className="p-2 border border-gray-300 rounded"
          value={interviewType}
          onChange={(e) => setInterviewType(e.target.value)}
        >
          <option value="">-- Select Interview Type --</option>
          <option value="technical">Technical</option>
          <option value="behavioral">Behavioral</option>
        </select>
      </div>
      {interviewType === 'technical' && (
        <div className="mb-4">
          <label htmlFor="technology" className="mr-2 text-white">Select Technology:</label>
          <select
            id="technology"
            className="p-2 border border-gray-300 rounded"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          >
            <option value="">-- Select Technology --</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
            <option value="java">Java</option>
          </select>
        </div>
      )}
      {interviewType === 'technical' && (
        <div className="mb-4">
          <label htmlFor="difficultyLevel" className="mr-2 text-white">Select Difficulty Level:</label>
          <select
            id="difficultyLevel"
            className="p-2 border border-gray-300 rounded"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="">-- Select Difficulty Level --</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      )}
      {interviewType === 'technical' && (
        <div className="mb-4">
          <label htmlFor="numQuestions" className="mr-2 text-white">Number of Questions:</label>
          <select
            id="numQuestions"
            className="p-2 border border-gray-300 rounded"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
          >
            <option value="">-- Select Number of Questions --</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      )}
      <button
        className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${!interviewType || !technology || !difficultyLevel || !numQuestions ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!interviewType || !technology || !difficultyLevel || !numQuestions}
        onClick={handleStartInterview}
      >
        Start Interview
      </button>
      <button
        className="mt-4 text-gray-500 hover:text-blue-500"
        onClick={handleLogout}
      >
        Logout
      </button>
      <Intervew technology={technology}  difficultyLevel={difficultyLevel}  numQuestions={numQuestions} />
    </div>
   
  );
};

export default PracticeInterview;
