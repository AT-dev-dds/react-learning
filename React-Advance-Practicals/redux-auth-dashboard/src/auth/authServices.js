import axios from 'axios'
import React from 'react'

export const AuthApi=async(formData)=>{

    try{
     const res= await axios.post("https://dummyjson.com/auth/login",{
        username:formData.username,
        password:formData.password
     });

     return res.data;
    }catch(err){
     console.log(err.message);
    }
}