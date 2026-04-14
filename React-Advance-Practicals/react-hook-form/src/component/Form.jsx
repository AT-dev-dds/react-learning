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
       <input type="password" {...register("password",{required:true,
        validate:{
            minLength: (value)=>value.length>=6,
            maxLength:(value)=>value.length<=14
        }
       })} />
     </div>
     
     { 
        errors.password?.type==="minLength" && <p style={{color:"red"}}>Password Should not be less than 6</p>
        
     }
     {
        errors.password?.type==="maxLength" && <p style={{color:"darkblue"}}>Password must be atmost 14 Characters </p>
     }
     <div className="mb-3">
        <button type="submit">Submit</button>
     </div>

    </form>
    </>
  )
}
