import { createContext, useState } from "react";

export const QaContex=createContext()

export default function QacontexFun({children}){
    const [questiondata,setquestiondata]=useState([])
    return <QaContex.Provider value={{questiondata,setquestiondata}}>{children}</QaContex.Provider>
}