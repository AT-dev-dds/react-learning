import React, { useState } from 'react'
import Button from '../components/Button'
import {useNavigate} from 'react-router'
import Input from '../components/Input'
import {useForm} from 'react-hook-form'
import authServices from '../services/authServices';

export default function Login() {

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const Navigate=useNavigate();

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const onSubmit=async(formData)=>{
        
      try{
        setIsLoading(true);
        setError(null);
        const res= await authServices(formData);

        if(!res) return;
        
        localStorage.setItem("token",res.accessToken);

         Navigate("/dashboard");
      }catch(err){
         setError(err);
         
      }finally{
        setIsLoading(false);
      }
  
    }

  return (
   <>

 <form onSubmit={handleSubmit(onSubmit)}>

  <div className='container mt-5 mb-5 mx-auto w-100'>

   <Input children="username" placeholder="Enter username (e.g., emilys)" type="text" {...register("username",{required:true})}  />

   {
    errors.username && <p style={{color:"red"}}>Username is required!</p>
   }


   <Input children="password" placeholder="Enter password (e.g., emilyspass)" type="password" {...register("password",{
    required:true, validate:{
        minLength:(value)=>value.length>=6,
        maxLength:(value)=>value.length<=12
    }
   })} />

   {
    errors.password && <p style={{color:"red"}}>Password is required!</p>
   }
   {
    errors.password?.type==="minLength" && <p style={{color:"red"}}>Length must be more than 5 characters</p>
   }
    {
    errors.password?.type==="maxLength" && <p style={{color:"darkblue"}}>Length must be less than 13 characters</p>
   }

    {
     error && <p style={{color:"red", textAlign:"center"}}>Invalid credentials. Please try again.</p>
    }

   <Button className="btn btn-info" > Submit</Button>

   </div>

 </form>


   </>
  )
}
