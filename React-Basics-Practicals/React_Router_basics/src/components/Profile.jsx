import React from 'react'
import { useNavigate } from 'react-router'

export default function Profle() {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>This is Profile page</h1>
       <button onClick={()=>Navigate("/")}> Change View</button>
    </div>
  )
}
