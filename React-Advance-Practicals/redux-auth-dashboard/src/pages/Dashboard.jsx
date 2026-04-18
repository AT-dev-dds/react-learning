import React from 'react'
import {getUser} from '../auth/getUsers.js'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../auth/authSlices.js'
import { useNavigate } from 'react-router'

export default  function Dashboard() {

 const user= useSelector((state)=>state.auth.user)

 const dispatch=useDispatch();

 const navigate=useNavigate();
    const res= getUser();
  return (
   <>
   <h1> {res.username}</h1>

   <h2>{user.username}</h2>

   <button onClick={()=>{
    dispatch(logout());
    navigate("/")
   }}>Logout</button>
   </>
  )
}
