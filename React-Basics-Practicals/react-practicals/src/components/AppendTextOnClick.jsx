import React, { useState } from 'react'

export default function AppendTextOnClick() {
    const[input,setInput]=useState("");
    const[name,setName]=useState("");

    const handleChange=(e)=>{
         setInput(e.target.value);
    }

    const handleClick=(e)=>{
      setName(input);

      e.preventDefault();
    }
  return (
   <>
   
   <div className='container bg-white m-5'>

    <form action="" onSubmit={handleClick} className='shadow-lg text-center'>
       
       <h1 className='text-info fw-bold'>Hello, {name}</h1>
       <input type="text" className='form-control mt-2' value={input} onChange={handleChange} placeholder='Enter your name:' />
       <button className='btn btn-secondary rounded mt-3' type='submit'>Submit</button>
    </form>

   </div>
   </>
  )
}
