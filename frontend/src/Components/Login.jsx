import React, { useState } from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/user/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', JSON.stringify(res.data.token));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-500 mt-[-50px] ">
      <div className="w-1/4 p-4 bg-white rounded-md shadow-md"> 
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md text-base"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded-md text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white mt-5 rounded-md text-base font-bold transition duration-300 ease hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
