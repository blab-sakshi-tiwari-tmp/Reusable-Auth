"use client"
import {returntype}  from '../app/page'
const list=[
  {
    username:'nubul',
    password:'nubul123',
    personaldata:{
      dob:'27/3/1985',
      gender:'male',
      location:'assam',
      role:'teacher',
      response:'ok',
      passwordvalid:'yes',
      usernamevalid:'yes',
    }
  },
  {
    username:'sakshi',
    password:'sakshi123',
    personaldata:{
      dob:'27/4/2002',
      gender:'female',
      location:'banaras',
      role:'student',
      response:'ok',
      passwordvalid:'yes',
      usernamevalid:'yes',
    }
  },
  {
    username:'sorav',
    password:'sorav123',
    personaldata:{
      dob:'27/9/1995',
      gender:'male',
      location:'assam',
      role:'admin',
      response:'ok',
      passwordvalid:'yes',
      usernamevalid:'yes',
    }
  }

]

export const Auth = async (data: returntype) => {
  let sendresult={
    dob:'',
    gender:'',
    location:'',
    role:'',
    response:'not ok',
    passwordvalid:'no',
    usernamevalid:'no',
  
  };
  list.map((elem)=>{
    const {username,password,personaldata}=elem
    console.log(elem," ",data);
    
    if (data.username === username && data.password === password) 
    { 
      // console.log(personaldata);
      sendresult=personaldata
      
    }else if(data.username === username ){
      sendresult= {
        ...sendresult,passwordvalid:'yes'
      }
      
    }else if(data.password === password){
      sendresult=  {
        ...sendresult,usernamevalid:'yes'
      }
    }
  })
  return sendresult
};
