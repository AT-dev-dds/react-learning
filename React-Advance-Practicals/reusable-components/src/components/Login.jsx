import React, { useState } from 'react'
import Button from './Button'
import Navbar from './Navbar';
import Input from './Input';

export default function Login() {

      const[email,setEmail]=useState("");
      const [password,setPassword]= useState("");
      const [status,setStatus] =useState(false);

      const handleClick=()=>{
        if(password.trim()==="" || email.trim()===""){
           return alert("Email and password is mandatory!")
        }
        else if(password!=="123456"){
           return alert("Password mismatch!")
        }
        else if(email!=="admin@gmail.com"){
           return alert("Invalid Email!")
        }
        else{
           return setStatus(true);
        }
      }

  return (
  <>
  <span className="border border-4">
  <form className='container shadow-lg h-500 w-500'>
    

 <div className='mb-3'>
     <Input label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
 </div>

 <div className='mb-3'>
     <Input label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
 </div>

  
    <div className='mt-5  p-3 d-flex justify-content-center'>
       <Button label="login" color="info" onClick={handleClick}/>
    </div>
   
</form>
 </span>

{/* <Navbar status={status}/> */}

{status && <Navbar/>}
  </>
   
  )
  
}
