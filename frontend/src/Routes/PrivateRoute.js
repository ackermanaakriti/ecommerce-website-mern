import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../Global/context/contextauth';
import { Outlet } from 'react-router-dom';

 async function  PrivateRoute()  {
    const[ok,setOk]=useState(false)
    const[auth,setAuth]=useAuth();
console.log(auth,"from privateroute")
   


      useEffect(()=>
      {
        const authCheck=async ()=>
        {
            const response = await axios.get('localhost:8020/protectedroute', {
                headers: { "Authorization": auth.token },
              });
        }
        if(auth?.token) authCheck();
        
        
      },[auth.token])

   
  return ok? 'hello' :"spinner"
    }

export default PrivateRoute