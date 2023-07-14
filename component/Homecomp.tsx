// type propstype={
//     // resultrole:string,
//     setResultrole:Function,
//     persondata:object
// }

import Teacher from "./Teachercomp";
import Student from "./Studentcomp";
import Admin from "./Admincomp";

import Logout from "./Logoutcomp";
import {  useState } from "react";

import { useContext } from "react";
import { dataContext } from "@/contextapi/dataContext";
function Homecomp() {

const {resultrole,data}=useContext(dataContext)
    const [islogin,setIslogin]=useState<boolean>(true)
    
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
