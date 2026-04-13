import React, { useState } from 'react'
import useFindUser from '../hooks/useFindUser.js'
import useDebounce from '../hooks/useDebounce.js'
export default function UserDisplay() {

const [username,setUsername]=useState("");

const debounced=useDebounce(username,500)

    const {user,error,isLoading}=useFindUser(debounced);

    if(error){
        return <h1>Can't Fetch User, Error!</h1>
    };

    if(isLoading){
        return <h2> Loading....</h2>
    }
    

  return (
   <>

   <h1> Users Profile:</h1>
<input type="text" value={username} placeholder='Search User' onChange={(e)=>setUsername(e.target.value)} />

   {
    user.map((u)=><div key={u.id}>

   <h4>UserName: {u.username}</h4>
   <p>Email: {u.email}</p>
   <p>Phone Number: {u.phone}</p>
    </div>)
   }
   </>
  )
}
