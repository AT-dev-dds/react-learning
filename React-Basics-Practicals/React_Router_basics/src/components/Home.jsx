import React from 'react'
import {useNavigate} from 'react-router'
export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={()=>Navigate("/profile")}> Change View</button>
      <button onClick={()=>Navigate("/courses")}>Courses</button>
      
    </div>
  )
}
