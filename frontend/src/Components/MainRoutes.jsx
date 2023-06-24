import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import SignUp from './SignUp'
import Login from './Login'
import PracticeInterview from './PracticeInterview'
import InterViewPage from './InterViewPage'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PracticeInterview/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/interViewPage" element={<InterViewPage/>}/>
    </Routes>
  )
}

export default MainRoutes