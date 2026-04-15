import React, { useEffect } from 'react'
import getUserData from '../services/getUserData'

export default function Dashboard() {

    useEffect(()=>{
        const getUser=async()=>{
         const res= await getUserData();
        console.log(res);
        };
        getUser();
    },[])

  return (
    <div>
      <h1>Hello , Dashboard!</h1>
    </div>
  )
}
