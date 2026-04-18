import React from 'react'
import {useForm} from 'react-hook-form'
import {AuthApi} from '../auth/authServices';
import {useDispatch} from 'react-redux'
import {loginSuccess} from '../auth/authSlices.js'
import { useNavigate } from 'react-router';

export default function Login() {

    const navigate=useNavigate();
    
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const dispatch=useDispatch();

const onSubmit=async(formData)=>{
  const res= await AuthApi(formData);

  localStorage.setItem("token",res.accessToken);

  dispatch(loginSuccess({
    user:res,
    token:res.accessToken
  }));

  navigate("/dashboard")
  
}

return(
  <>
  
<form onSubmit={handleSubmit(onSubmit)}>

  <div>
    <input type="text" placeholder='Enter username' {...register("username",{required:true})} />
  {
    errors.username && <p style={{color:"red"}}>Username is required!</p>
  }
  </div>

 <div>
   <input type="text" placeholder='Enter password' {...register("password",{
    required:true,
    validate:{
        minCount:(value)=>value.length>=6,
        maxCount:(value)=>value.length<=12
    }
  })} />

  {
    errors.password && <p style={{color:"red"}} >Password is required!</p>
  }

  {
    errors.password?.type==="minCount" && <p style={{color:"darkgrey"}} > Password length must be of 6 characters</p>
    
  }
  {
    errors.password?.type==="maxCount" && <p style={{color:"darkgrey"}} >Password length should not be more than 12 </p>
  }
 </div>

  <div>
    <button type="submit">Submit</button>
  </div>
  
  
</form>

  </>
)
  
}
