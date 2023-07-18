// type propstype={
//     // resultrole:string,
//     setResultrole:Function,
//     persondata:object
// }

import Teacher from "./Teachercomp";
import Student from "./Studentcomp";
import Admin from "./Admincomp";

import Logout from "./Logoutcomp";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { dataContext } from "@/contextapi/dataContext";
function Homecomp() {

const {resultrole,islogin,setIslogin,setData,data}=useContext(dataContext)
    // const [islogin,setIslogin]=useState<boolean>(true)
    // const {islogin,setIslogin}=useContext(dataContext)
    // useEffect(() => {
    //   const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
    //   if(parsedData)
    //   setIslogin(true)
    // }, [])
    
    // useEffect(() => {
    //   console.log('in home',islogin);
      
    // }, [islogin])
// const {setResultrole,islogin,setIslogin
    return (
        <>
        <h1>home screen</h1>
        {(resultrole==='admin' ) && <Admin value={data}/>}
             { (resultrole==='teacher')&& <Teacher value={data}/>}
            { (resultrole==='student')&& <Student value={data}/>}
            <Logout islogin={islogin} setIslogin={setIslogin} />
        </>
    )
}

export default Homecomp
