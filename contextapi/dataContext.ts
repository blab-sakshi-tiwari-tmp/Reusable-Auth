import { createContext, useContext } from "react";
export type dataType={
    dob:string,
      gender:string,
      location:string,
      role:string,
      response:string
  }
type contextType={
    resultrole:string,
    setResultrole:Function,
    data:dataType,
    setData:Function,
}
export const dataValue={
    dob:"",
      gender:"",
      location:"",
      role:"",
      response:""
  }
const initialState={
    resultrole:'',
    data:dataValue,

    setResultrole:(role:string)=>{},
    setData:(persondata:dataType)=>{}
}
export const dataContext=createContext<contextType>(initialState);

