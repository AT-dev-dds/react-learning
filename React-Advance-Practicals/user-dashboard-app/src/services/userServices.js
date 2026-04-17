import React from 'react'
import axios from 'axios'

export default async function userServices() {

    const token=localStorage.getItem("token");
  
   try{
    const res= await axios.get("https://dummyjson.com/auth/me",{
   headers:{
    Authorization: `Bearer ${token}`
   }
   });
    
   return res.data;
   }catch(err){
    console.log(err.message);
   }
}
