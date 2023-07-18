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
  const [paramstate,setParamstate]=useState<string>('')
  // useEffect(() => {
    // console.log("resultrolestate", resultrolestate);
    // console.log("datastate", datastate);
    // console.log(loginstate);
    // console.log("paramstate",paramstate);
    
  // }, [datastate,resultrolestate])
  
  
  const valuetoshare={
    resultrole:resultrolestate,
    data:datastate,
    islogin:loginstate,
    isparam:paramstate,
    setIsparam:(isparam:string)=>{
      setParamstate(isparam)
    },
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
