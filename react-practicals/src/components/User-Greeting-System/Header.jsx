import React,{useContext} from 'react'
import {UserContext} from './UserContext.jsx'
export default function Header() {
    const names=useContext(UserContext)
  return (
    <div>
      <h1>Home Page</h1>

      <h3>Hello , {names}</h3>
    </div>
  )
}
