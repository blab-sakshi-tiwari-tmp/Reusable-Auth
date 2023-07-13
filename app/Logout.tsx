"use client"
import Home  from './page'
import { useState } from "react"
type propstype={
    data:boolean
    setdata:Function
    resultprop:Function
}
function Logout(props:propstype) {
    const {data,setdata,resultprop}=props
    function onclickHandler(){
        setdata(false)
        resultprop(false)
        localStorage.clear()
    }
    return (
        <>
        {(data && <button type="button"  onClick={()=>onclickHandler()}>logout</button>) || <Home/>}
        
        </>
    )
}

export default Logout
