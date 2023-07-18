import React from "react";
import { useContext } from "react";
import { useEffect ,useState} from "react";
import { usePathname, useRouter } from "next/navigation";
import { dataContext } from "@/contextapi/dataContext";
import { log } from "console";
// usePathname
type propType = {
  children: React.ReactNode;
};
export const AuthWrapper = (props: propType) => {
  const { children } = props;
  const pathname=usePathname()
  const router = useRouter();
  const { resultrole, setResultrole,data,setIslogin, islogin, setData } = useContext(dataContext);
  // const [count, setCount] = useState<number>(0)
  let parsedData
  useEffect(() => {
     parsedData = JSON.parse(localStorage.getItem("persondata") || "{}");
    setData(parsedData)
    setResultrole(parsedData?.role)

    if(!resultrole){
      router.push('/login')
    }
    
  },[])
  useEffect(() => {
    console.log(resultrole);
    
  }, [resultrole,islogin])
  
  
  return <>{resultrole  ? children  : 'loading'}</>;
};
