"use client"
import {returntype}  from '../app/login/page'
const list=[
  {
    username:'nubul',
    password:'nubul123',
    personaldata:{
      dob:'27/3/1985',
      gender:'male',
      location:'assam',
      role:'teacher',
      response:'ok'
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
      response:'ok'
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
      response:'ok'
    }
  }

]

export const Auth = async (data: returntype) => {
  let sendresult={dob:'',
  gender:'',
  location:'',
  role:'',
    response:''};
  list.map((elem)=>{
    const {username,password,personaldata}=elem
    // console.log(elem," ",data);
    
    if (data.username === username && data.password === password) 
    { 
      // console.log(personaldata);
      sendresult=personaldata
      return personaldata;
    }
  })
  return sendresult
};
