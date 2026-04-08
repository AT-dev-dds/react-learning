import React, { useEffect, useRef,useState } from 'react'

export default function TrackPreviousState() {

    const [input,setInput]=useState("");
    const prevInputValue=useRef("");

    useEffect(()=>{
        prevInputValue.current=input;
    },[input])
  return (
   <>
   
   <input type="text" placeholder='Enter Text' value={input} ref={prevInputValue} onChange={(e)=>setInput(e.target.value)} />
   
   <h3>Current Input:{input}</h3>
   <h3>Previous input:{prevInputValue.current}</h3>
 
   </>
  )
}
