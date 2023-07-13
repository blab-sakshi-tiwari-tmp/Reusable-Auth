type propstype={
    resultrole:string,
    setResultrole:Function,
    persondata:object
}

import Teacher from "./Teacher";
import Student from "./Student";
import Admin from "./Admin";
import Logout from "./Logout";
import { useState } from "react";
function Homecomp(props:propstype) {
    const [islogin,setIslogin]=useState<boolean>(true)
    const {resultrole,setResultrole,persondata}=props
    // console.log(persondata);
    
    // if(persondata){
    //     // const {role}=persondata
        localStorage.setItem('token',resultrole)
    // }
    
    
    return (
        <>

        <h1>home screen</h1>
        {(resultrole==='admin' ) && <Admin/>}
             { resultrole==='teacher'&& <Teacher/>}
            { resultrole==='student'&& <Student/>}
            <Logout islogin={islogin} setIslogin={setIslogin} setResultrole={setResultrole}/>
        </>
    )
}

export default Homecomp
