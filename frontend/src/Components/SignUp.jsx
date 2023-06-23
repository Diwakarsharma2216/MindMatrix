import React, { useState } from 'react';
import axios from "axios";

const url = process.env.REACT_APP_URL;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const data = { email, password, name: firstName + lastName };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${url}/user/register`, data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-container flex justify-center items-center h-screen bg-gray-100 ">
     <div className="signup-content mx-auto w-1/3 p-4 bg-white rounded-md shadow-md ">
        <h1 className="signup-heading text-2xl font-bold mb-4 text-center">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-form grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="form-group">
              <label htmlFor="First_name" className="block font-bold mb-2">First Name</label>
              <input
                type="text"
                id="First_name"
                placeholder="Enter your First name"
                onChange={(e) => setFirstName(e.target.value)}
                className="input-box w-full px-2 py-1 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Last_name" className="block font-bold mb-2">Last name</label>
              <input
                type="text"
                id="Last_name"
                placeholder="Enter your Last name"
                onChange={(e) => setLastName(e.target.value)}
                className="input-box w-full px-2 py-1 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-box w-full px-2 py-1 border border-gray-300 rounded-md text-base"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-box w-full px-2 py-1 border border-gray-300 rounded-md text-base"
              />
            </div>
          </div>
          <button type="submit" className="signup-button w-40 px-3 py-2 mt-6 bg-blue-500 text-white rounded-md text-base transition-colors duration-300 ease hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
