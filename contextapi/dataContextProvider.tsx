"use client"
import { useEffect,useState,ReactNode } from "react";
import React from "react";
import {dataType,dataValue} from './dataContext'
import { dataContext } from "./dataContext";
import { set } from "react-hook-form";
type props={
    children:ReactNode
}

function DataContextProvider({children}: props) {
  const [resultrolestate, setResultrolestate] = useState('');
  const [datastate, setDatastate] = useState<dataType>(dataValue);
  const [loginstate,setLoginstate]=useState<boolean>(false)

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
   setDatastate(parsedData)
   

   // const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
   console.log(parsedData);
   // 
   if(Object.keys(parsedData).length === 0){
    // setDatastate()
    setLoginstate(false)
     setResultrolestate('')
   }else{
    setLoginstate(true)
    setDatastate(parsedData)
     setResultrolestate(parsedData?.role)
   }
   
   
 },[])
 useEffect(() => {
  const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
  //  console.log(resultrolestate);
  console.log(parsedData);
   
 }, [resultrolestate])
  
  const valuetoshare={
    resultrole:resultrolestate,
    data:datastate,
    islogin:loginstate,
    setIslogin:(islogin:boolean)=>{
      setLoginstate(islogin)
    },
     setResultrole:(resultrole:string)=>{
        setResultrolestate(resultrole)
      },
       setData:(data:dataType)=>{
        setDatastate(data)
      }
  }
  
    return (
        <dataContext.Provider value={valuetoshare}>
            {children}
        </dataContext.Provider>
    )
}

export default DataContextProvider
