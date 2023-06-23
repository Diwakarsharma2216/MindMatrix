import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import SignUp from './SignUp'
import Login from './Login'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes