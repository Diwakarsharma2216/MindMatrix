import { createContext, useState } from "react";

export const QaContex=createContext()

export default function QacontexFun({children}){
    const [questiondata,setquestiondata]=useState([])
    const [feedbackdata,setfeedbackdata]=useState("")
    return <QaContex.Provider value={{questiondata,setquestiondata,setfeedbackdata,feedbackdata}}>{children}</QaContex.Provider>
}