import React,{useContext} from 'react'
import {Auth} from '../context/AuthContext.jsx'
export default function Navbar() {
    const{state,dispatch}=useContext(Auth);
  return (
  <>
{
    state.isLoggedIn?<div>
      <h3>Hello,{state.user}</h3>
      <button onClick={()=>dispatch({type:"LOGOUT"})} className='btn btn-warning'>Logout</button>
    </div>:
    <div>
       <h3>PLease Login First</h3>
    </div>
}
  </>
  )
}
