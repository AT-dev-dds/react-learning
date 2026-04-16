import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import {useForm} from 'react-hook-form'

export default function Login() {

    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const onSubmit=(formData)=>{
        

    }

  return (
   <>

 <form onSubmit={handleSubmit(onSubmit)}>

  <div className='container mt-5 mb-5 mx-auto w-100'>

   <Input children="username" placeholder="Enter username" type="text" {...register("username",{required:true})}  />

   {
    errors.useername && <p style={{color:"red"}}>Username is required!</p>
   }


   <Input children="password" placeholder="Enter password" type="password" {...register("password",{
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

   <Button className="btn btn-info" > Submit</Button>

   </div>

 </form>


   </>
  )
}
