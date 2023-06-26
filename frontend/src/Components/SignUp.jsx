import React, { useContext, useState } from 'react';
import axios from "axios";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { QaContex } from '../Contex/QAContex';

const url =process.env.REACT_APP_URL;

const SignUp = () => {
  const navigate = useNavigate();
  const {setcontexname}=useContext(QaContex)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const data = { email, password, name: firstName + lastName };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${url}/users/register`, data)
      .then(res => {
        if(res.data.message){
          alert("User registered successfully")
          setcontexname(data.name)
        }else{
          alert("User already exists. Please login")
        }
        // alert(res.data.message)
      })
      .catch(err => console.log(err));

      setEmail("")
      setPassword("")
      setFirstName("")
      setLastName("")
  };

  return (
    <div className="signup-container flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-blue-500">
 <div className="signup-content mx-auto w-full  md:w-2/3 lg:w-1/3 p-4 bg-white rounded-md shadow-md">
        <h1 className="signup-heading text-2xl font-bold mb-4 text-center">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-form grid grid-cols-1 gap-4 md:grid-cols-2">
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
          <button type="submit" className="signup-button w-full md:w-40 px-3 py-2 mt-6 bg-blue-500 text-white rounded-md text-base transition-colors duration-300 ease hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            SignUp
          </button>
        </form>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 place-items-center">
          <button className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
            <FcGoogle className="google-icon w-6 h-6 text-red-600 mr-2" />
            <span className="text-sm">Login with Google</span>
          </button>
          <button className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100">
            <AiOutlineFacebook className="facebook-icon w-6 h-6 text-blue-500 mr-2" />
            <span className="text-sm">Login with Facebook</span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-500 text-xs md:text-base">Already have an account?</span>
          <button className="text-blue-500 ml-2 hover:text-blue-700 text-xs md:text-base" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
