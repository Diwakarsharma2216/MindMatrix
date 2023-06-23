import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import SignUp from './SignUp'
import Login from './Login'
import PracticeInterview from './PracticeInterview'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PracticeInterview/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes