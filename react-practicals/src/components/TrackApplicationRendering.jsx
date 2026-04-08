import React, { useEffect, useRef, useState } from 'react'

export default function TrackApplicationRendering() {

    const [input,setInput]=useState("");
    
    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    },[input])
  return (
  <>
  <input type="text" placeholder='enter text' value={input} onChange={(e)=>setInput(e.target.value)} />

  <h1> Render Count:{count.current}</h1>
  </>
  )
}
