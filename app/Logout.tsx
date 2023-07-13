"use client"
import Home  from './page'
import { useState } from "react"
type propstype={
    islogin:boolean
    setIslogin:Function
    setResultrole:Function
}
function Logout(props:propstype) {
    const {islogin,setIslogin,setResultrole}=props
    function onclickHandler(){
        setIslogin(false)
        setResultrole("")
        localStorage.clear()
    }
    return (
        <>
        {(islogin && <button type="button"  onClick={()=>onclickHandler()}>logout</button>) || <Home/>}
        
        </>
    )
}

export default Logout
