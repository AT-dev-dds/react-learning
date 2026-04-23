import React,{useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../auth/authThunk.js'
import {useNavigate} from 'react-router'

export default function Login() {

    const  dispatch=useDispatch();
    const navigate=useNavigate();

    const {
        register,
        handleSubmit,
    }=useForm();

    const {user}= useSelector(
        (state)=>state.auth
    );

    const onSubmit=(formData)=>{
       dispatch(login(formData))
    }
     
  useEffect(()=>{
      if(user){
      navigate("/dashboard")
    }
  },[user])

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

<input type="text" placeholder='Enter Username' {...register("username")} />

    <input type="text" placeholder='Enter Password' {...register("password")} />

    <button type='submit' >Login</button>


    </form>
    </>
  )
}
