import React, { useState } from 'react'

export default function DisplayUserProfile() {

    const [isAuthenticated,setIsAuthenticated]=useState(false);
  return (
   <>
   {
    isAuthenticated?<h1>User Profile</h1>:<button onClick={()=>setIsAuthenticated(true)}>Log in</button>
   }
   </>
  )
}
