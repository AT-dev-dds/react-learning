import React from 'react'
import {getUser} from '../auth/authService.js'

export default async function Dashboard() {

    const token=localStorage.getItem("token");

    const users=await getUser(token);
  return (
  <>
   {
    users.map((user)=><div key={user.id}>
        <h2>{user.username}</h2>
    </div>)
   }
  </>
  )
}
