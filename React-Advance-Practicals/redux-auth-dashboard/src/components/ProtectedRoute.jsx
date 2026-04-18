import React from 'react'
import {useNavigate} from 'react-router'

export default function ProtectedRoute({children}) {

    const navigate=useNavigate();

    const token=localStorage.getItem("token");

    if(!token){
        return navigate("/");
    }
    return children;

  
}
