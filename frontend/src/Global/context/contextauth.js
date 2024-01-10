
import React,{useState,useContext,createContext, useEffect} from 'react'
const Authcontext= createContext()

const AuthProvider = ({children}) => {

    
    const [auth,setAuth]= useState({
        user:null,
        token:''
    })

     useEffect (()=>
     {
        const data= localStorage.getItem('authsignup');
        if(data)
        {
            const parsedata= JSON.parse(data);
            setAuth({...auth,
                user:parsedata.user,token:parsedata.token})
        }
     },[])
  return (
    <Authcontext.Provider value={[auth,setAuth]}>
        {children}
    </Authcontext.Provider>

   
  )
}
const useAuth=()=>useContext(Authcontext);

export  {AuthProvider,useAuth}