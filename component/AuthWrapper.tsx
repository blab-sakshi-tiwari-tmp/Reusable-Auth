import React from "react";
import { useContext } from "react";
import { useEffect ,useState} from "react";
import { usePathname, useRouter } from "next/navigation";
import { dataContext } from "@/contextapi/dataContext";
// usePathname
type propType = {
  children: React.ReactNode;
};
export const AuthWrapper = (props: propType) => {
  const { children } = props;
  const pathname=usePathname()
  const router = useRouter();
  const { resultrole } = useContext(dataContext);
  const [count,setcount]=useState(0)
  console.log('pathname',pathname,' ','resultrole',resultrole);
  
  useEffect(() => {
    
    if(count==1){
    if(pathname!='/login' && resultrole===''){
      router.push('/login')
    }}
    if(count<2){
    setcount(count+1)}
  },[count])
  
           
  return <>{resultrole  ? children  : 'loading'}</>;
};
