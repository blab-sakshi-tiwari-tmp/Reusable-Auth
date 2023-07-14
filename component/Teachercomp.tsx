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
function Teacher({value}:dataType) {
    const {resultrole}=useContext(dataContext)
    const {dob,gender,location,role}=value
    return (
        <> <h1>welcome {resultrole}</h1><br/><br/>
        <h6>gender: </h6>{gender}
        <h6>location: </h6>{location}
        <h6>dob: </h6>{dob}t</>
    )
}

export default Teacher
