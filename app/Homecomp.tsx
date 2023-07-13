type propstype={
    getdata:string,
    setgetdata:Function,
    persondata:object
}

import Teacher from "./Teacher";
import Student from "./Student";
import Admin from "./Admin";
import Logout from "./Logout";
import { useState } from "react";
function Homecomp(props:propstype) {
    const [data,setData]=useState<boolean>(true)
    const {getdata,setgetdata,persondata}=props
    console.log(persondata);
    
    // if(persondata){
    //     // const {role}=persondata
        localStorage.setItem('token',getdata)
    // }
    
    
    return (
        <>

        <h1>home screen</h1>
        {(getdata==='admin' ) && <Admin/>}
             { getdata==='teacher'&& <Teacher/>}
            { getdata==='student'&& <Student/>}
            <Logout data={data} setdata={setData} resultprop={setgetdata}/>
        </>
    )
}

export default Homecomp
