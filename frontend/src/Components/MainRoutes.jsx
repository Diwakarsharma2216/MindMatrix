import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import SignUp from './SignUp'
import Login from './Login'
import PracticeInterview from './PracticeInterview'
import InterViewPage from './InterViewPage'
import { Feedback } from './Feedback'
import { PrivateRoutes } from './PrivateRoutes'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={
          <PrivateRoutes>
        <PracticeInterview/>
        </PrivateRoutes>
      }
        />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/interViewPage" element={<InterViewPage/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
    </Routes>
  )
}

export default MainRoutes