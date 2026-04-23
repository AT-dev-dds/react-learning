import React, { useEffect, useState } from 'react'
import {getUser} from '../auth/authService.js'

export default function Dashboard() {

    const [user,setUser]=useState(null);

    useEffect(()=>{
        const fetchUser=async()=>{
            const token=localStorage.getItem("token");
            console.log("TOKEN:", token);
            const users=await getUser(token);
            setUser(users);
        };

        fetchUser();
    },[])

  return (
   <>
   {
    user?<div><h3>{user.username}</h3></div>:<p>Loading...</p>
   }
   </>
  )
}
