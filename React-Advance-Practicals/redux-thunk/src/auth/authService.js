import axios from 'axios';
import React from 'react'

const API_URL="/api/auth";

export const loginUser=async(data)=>{
    const res=await axios.post(`${API_URL}/login`,data);
    return res.data;
};


export const getUser=async(token)=>{
   const res= await axios.get(`${API_URL}/me`,{
    headers:{
    Authorization: `Bearer ${token}`
    }
   });
   return res.data;
}