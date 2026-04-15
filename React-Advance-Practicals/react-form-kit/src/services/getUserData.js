import axios from 'axios';
import React from 'react'

export default async function getUserData() {
  
    const token=localStorage.getItem("token");

   const res= await axios.get("https://dummyjson.com/auth/me",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
  
    return res.data;
}
