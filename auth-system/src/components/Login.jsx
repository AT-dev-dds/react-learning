import React from 'react'
import { useState } from 'react'
import {Auth} from '../context/AuthContext.jsx'
import { useContext } from 'react';


export default function Login() {
    const [email,setEmail]=useState("");
   

const {dispatch}=useContext(Auth);

    const handleClick=()=>{
        dispatch({
            type:"LOGIN",
            payload:email
        })
    }
  return (
    <>
    <div>
      <input type="email" placeholder='Enter email' value={email} onChange={(e)=>{
        setEmail(e.target.value);
        e.preventDefault();
      }}  />

      <button className='btn btn-primary' onClick={handleClick}>Login</button>
    </div>

    
    </>
  )
}
