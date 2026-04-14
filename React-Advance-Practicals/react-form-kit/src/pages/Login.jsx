import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import {useForm} from 'react-hook-form'

export default function Login() {

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
 <>

<form onSubmit={handleSubmit(onSubmit)}>


<div className="mb-3">
    <Input label="email" type="email" name="email" {...register("email",{required:true})} />
</div>

{
  errors.email && <p style={{color:"red"}}>Email is required!</p>
}

<div className="mb-3">
    <Input label="password" type="password" name="password" {...register("password",{required:true,
        validate:{
            minLength:(value)=>value.length>=6,
            maxLength:(value)=>value.length<=12
        }
    })} />

    {
        errors.password && <p style={{color:"red"}}>password is required!</p>
    }

    {
        errors.password?.type==="minLength" && <h1 style={{color:"red"}}>Password should be atleast 6</h1>
    }
     {
        errors.password?.type==="maxLength" &&<h1 style={{color:"darkblue"}}>Password should be at atmost 12</h1>
    }
</div>

    <Button type="submit" className="btn btn-info rounded mt-2 " >
        Submit
    </Button>


</form>

 </>
  )
}
