import React from 'react'

import { useContext,useEffect } from "react";
import { dataContext } from "@/contextapi/dataContext";
export const Setting = () => {
  const {islogin,setIslogin}=useContext(dataContext)
  // useEffect(() => {
  //   const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
  //   if(parsedData)
  //   setIslogin(true)
  // }, [])
  
  // useEffect(() => {
  //   console.log('in setting',islogin);
    
  // }, [islogin])
  
  return (
    <div>Setting</div>
  )
}
