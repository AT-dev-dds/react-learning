import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router'

export default function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const Navigate=useNavigate();

    const handleSubmit=()=>{
        if(!email && !password){
         alert("Enter first Email and Password")
        }
        else if(!email || email.trim()===""){
         alert("Email is mandatory")
        }
        else if(!password || password.trim()===""){
         alert("password is mandatory")
        }
        else{
            alert("Login Successfully");
            Navigate("/home");
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      value={email}
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      value={password}
      id="exampleInputPassword1"
      onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </>
  )
}
