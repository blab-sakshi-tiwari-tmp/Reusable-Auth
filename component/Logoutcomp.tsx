
"use client"
import Page  from '../app/page'
import { useRouter } from "next/navigation";
import { useState } from "react"

type propstype={
    islogin:boolean
    setIslogin:Function
    // setResultrole:Function
}

import { useContext } from "react";
import { dataContext } from "@/contextapi/dataContext";
import { redirect } from 'next/navigation'
 
function Logout(props:propstype) {
    const router = useRouter();

const {setResultrole}=useContext(dataContext)
    const {islogin,setIslogin}=props
    function onclickHandler(){
        setIslogin(false)
        
        localStorage.clear()
        router.push('./login')
    }
    return (
        <>
        {(islogin && <button type="button"  onClick={()=>onclickHandler()}>logout</button>)   }
        
        </>
    )
}



export default Logout
