"use client"
type propstype={
    islogin:boolean
    setIslogin:Function
}

import { useRouter } from "next/navigation"
import { useContext } from "react";
import { dataContext } from "@/contextapi/dataContext";

function Logout(props:propstype) {

    const router=useRouter()
const {setResultrole}=useContext(dataContext)
    const {islogin,setIslogin}=props
    function onclickHandler(){
        setIslogin(false)
        localStorage.clear()
        setResultrole("")
    }
    return (
        <>
        {(islogin && <button type="button"  onClick={()=>onclickHandler()}>logout</button>) || router.push('./')}
        </>
    )
}

export default Logout
