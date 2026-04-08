import React, { useEffect, useState } from 'react'

export default function TimeCounter() {

    const [currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString());

useEffect(()=>{
    const interval=setInterval(()=>{
        setCurrentTime(new Date().toLocaleTimeString())
    });

    return ()=> clearInterval(interval);
},[1000])

  return (
  <>
  <div>
    <h4> Current Time:{currentTime}</h4>
  </div>
  </>
  )
}
