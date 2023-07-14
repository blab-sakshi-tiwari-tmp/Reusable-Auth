type dataType={
    value:{dob:string,
      gender:string,
      location:string,
      role:string,
      response:string
      }
  }

import { useContext } from "react";
import { dataContext } from "@/contextapi/dataContext";
function Student({value}:dataType) {

    const {resultrole}=useContext(dataContext)
    const {dob,gender,location,role}=value
    return (
        <> <h1>welcome {resultrole}</h1><br/><br/>
        <strong>gender:{gender} </strong>
        <span>location: {location} </span>
        <span>dob: {dob}</span></>
    )
}

export default Student