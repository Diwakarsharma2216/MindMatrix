import { createContext, useState } from "react";

export const QaContex=createContext()

export default function QacontexFun({children}){
    const [questiondata,setquestiondata]=useState([])
    const [feedbackdata,setfeedbackdata]=useState("")
    const [contexname,setcontexname]=useState("")
    const [contextech,setcontextech]=useState("")
    return <QaContex.Provider value={{questiondata,setquestiondata,setfeedbackdata,feedbackdata,contexname,contextech,setcontexname,setcontextech}}>{children}</QaContex.Provider>
}