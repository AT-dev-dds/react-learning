import React from 'react'
import {Navigate} from 'react-router'

export default function ProtectedRoute({children}) {

s

    const token=localStorage.getItem("token");

    if(!token){
        return <Navigate to="/"/>;
    }
    return children;

  
}
