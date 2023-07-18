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
    islogin:boolean,
    setIslogin:Function,
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
export const initialState={
    resultrole:'',
    data:dataValue,
    islogin:false,
    setIslogin:(login:boolean)=>{},
    setResultrole:(role:string)=>{},
    setData:(persondata:dataType)=>{}
}
export const dataContext=createContext<contextType>(initialState);

