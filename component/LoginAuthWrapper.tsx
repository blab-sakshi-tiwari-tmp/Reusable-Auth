import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { dataContext } from "@/contextapi/dataContext";
type propType = {
  children: React.ReactNode;
};
export const AuthWrapper = (props: propType) => {
  const { children } = props;
  let pass=false;
  const router = useRouter();
  const { resultrole, setResultrole, islogin, setData } = useContext(dataContext);
  
  useEffect(() => {
    console.log('Auth');
    const parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
    setData(parsedData)
    setResultrole(parsedData?.role)
    
  },[])
  
  
  
  
 
  return <>{resultrole ? children  : 'loading'}</>;
};
