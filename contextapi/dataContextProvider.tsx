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
  
  useEffect(() => {
      // const data = 
      const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
      setDatastate(parsedData)
      setResultrolestate(parsedData?.role)
      console.log(parsedData);
      console.log(datastate);
      // console.log(re);
      
      
      
  },[])
  
  const valuetoshare={
    resultrole:resultrolestate,
    data:datastate,
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
