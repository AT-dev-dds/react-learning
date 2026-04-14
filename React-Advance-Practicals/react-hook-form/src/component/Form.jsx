import React from 'react'
import {useForm} from 'react-hook-form'

export default function Form() {

    const {
        register,
        handleSubmit,
        formState:{errors}
    }= useForm();
    

    const onClick=(data)=>{
        console.log("Button Clicked!",data)
    }

  return (
    <>
    <form  action="" onSubmit={handleSubmit(onClick)}>
     
     <div className='mb-3'>
       <label htmlFor=""> Email</label>
       <input type="text" {...register("email",{required:true})} />
     </div>

   

       <div className='mb-3'>
       <label htmlFor=""> Password</label>
       <input type="text" {...register("password",{required:true,minLength:{value:6,
       message:"Password must be more than 6 characters" }})} />
     </div>
     
       {errors.password && <p>{errors.password.message}</p>}

     <div className="mb-3">
        <button type="submit">Submit</button>
     </div>

    </form>
    </>
  )
}
