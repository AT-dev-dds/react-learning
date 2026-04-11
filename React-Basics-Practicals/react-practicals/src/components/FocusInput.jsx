import React, { useRef } from 'react'

export default function FocusInput() {

    const inputValue=useRef();
    
    const focusInput=()=>{
        inputValue.current.focus();
    }
  return (
  <>
  <input type="text" ref={inputValue} />
  <button onClick={focusInput}>Focus</button>
  </>
  )
}
