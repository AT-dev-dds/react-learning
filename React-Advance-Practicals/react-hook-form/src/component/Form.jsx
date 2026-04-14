import React from 'react'
import {useForm} from 'react-hook-form'

export default function Form() {

    const {
        register,
        handleSubmit,
        formState:{errors}
    }= useForm();


    const onSubmit=(data)=>{
        console.log("Button Clicked!",data)
    }

  return (
    <>
    <form  action="" onSubmit={handleSubmit(onSubmit)}>
     
     <div className='mb-3'>
       <label htmlFor=""> Email</label>
       <input type="email" {...register("email",{required:true})} />
     </div>

   

       <div className='mb-3'>
       <label htmlFor=""> Password</label>
       <input type="password" {...register("password",{required:true,minLength:{value:6,
       message:"Password must be more than 6 characters" }})} />
     </div>
     
       {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

     <div className="mb-3">
        <button type="submit">Submit</button>
     </div>

    </form>
    </>
  )
}
