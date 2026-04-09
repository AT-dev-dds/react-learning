import React,{useContext} from 'react'
import {Auth} from '../context/AuthContext.jsx'
export default function Dashboard() {

    const {state}=useContext(Auth)
  return (
    <div>
      {state.isLoggedIn?<h1>Welcome,{state.user}</h1>:<h1>PLease Login</h1>}
    </div>
  )
}
