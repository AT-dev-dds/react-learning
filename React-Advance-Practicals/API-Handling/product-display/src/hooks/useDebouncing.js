import React, { useEffect, useState } from 'react'

export default function useDebouncing(value,delay=500) {

    const [debouncing,setDebouncing]=useState(value);

    useEffect(()=>{

    const timer=setTimeout(() => {
        setDebouncing(value)
    }, delay);

    return ()=>{
        clearInterval(timer);
    }
    },[value,delay])
  
  return debouncing;
}
