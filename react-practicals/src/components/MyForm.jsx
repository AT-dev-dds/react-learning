import React, { useState } from 'react'

export default function MyForm() {

  const [name,setName]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
   alert(`Hello,${name}`);
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />

    <button className='btn btn-primary rounded' type="submit">Submit</button>
    </form>
    </>
  )
}
