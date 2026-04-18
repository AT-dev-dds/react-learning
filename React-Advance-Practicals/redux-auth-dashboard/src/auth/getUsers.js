import axios from 'axios'
import { useEffect } from 'react';


export const getUser=async()=>{

    const token=localStorage.getItem("token");

   useEffect(()=>{
    const fetchUser=async()=>{
    try{
         const res=await axios.get("https://dummyjson.com/auth/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return res.data;
    }catch(err){
        console.log(err.message);
    }
   };

   fetchUser();
   },[])
}