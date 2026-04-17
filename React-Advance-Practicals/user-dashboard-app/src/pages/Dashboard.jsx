import React, { useEffect, useState } from 'react'
import userServices from '../services/userServices'

export default function Dashboard() {

  const [user,setUser]= useState({});

  useEffect(()=>{
    const getUsers=async()=>{
      const res= await userServices();
        console.log(res);
        setUser(res);
    };
    getUsers();
  },[])

  return (
    <>
     <h1>{user.firstName}</h1>
    </>
  )
}
