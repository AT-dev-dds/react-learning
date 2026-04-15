import React from 'react'
import {useNavigate} from 'react-router'
export default function ProtectedRoutes({children}) {

    const Navigate=useNavigate();

    const token=localStorage.getItem("token");
    if(!token){
      return Navigate("/");
    }
  
    return children;
}
