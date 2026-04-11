import React,{useContext} from 'react'
import {UserContext} from './UseContext.jsx'

export default function Profile() {
    const {user,login,logout}=useContext(UserContext);
  return (
    <div>
      <h1>User:{user}</h1>

      {
        user==="Guest"?
        <button onClick={login}>Login</button>:
        <button onClick={logout}>Logout</button>
      }
    </div>
  )
}
