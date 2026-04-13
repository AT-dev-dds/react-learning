import React, { useEffect, useState } from 'react'

export default function useDebounce(value,timeout=500) {

const [debouncedValue,setDebouncedValue]=useState(value);


 useEffect(()=>{
    const timer=setTimeout(() => {

    setDebouncedValue(value);
    
 }, timeout);

return ()=>{
    clearTimeout(timer);
}

 },[value,timeout])

  return debouncedValue;
}
