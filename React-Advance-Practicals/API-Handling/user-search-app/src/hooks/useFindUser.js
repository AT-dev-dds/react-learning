import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function useFindUser(username) {

    const [user,setUser]=useState([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

 useEffect(()=>{

    const controller=new AbortController();

  const getUsers=async()=>{
    

      try{

        if(!username || username.trim() === "") {
            // Load all users when search is empty
            const res = await axios.get(`https://fakestoreapi.com/users`, {
                signal: controller.signal
            });
            setUser(res.data);
            setError(null);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);

         const res= await axios.get(`https://fakestoreapi.com/users?search=${username}`,{
            signal:controller.signal
         });
       
         
    const filtered= res.data.filter((u)=>{
       return u.username.toLowerCase().includes(username.toLowerCase());
    })
    
         setUser(filtered);
        
        
      }catch(err){
        if(axios.isCancel(err)){
            return;
        }
        setError(err.message);
      }
      finally{
        setIsLoading(false);
      }

  }
      getUsers();
  return ()=>{
        controller.abort();
    }
  
    },[username]);


  return {user,error,isLoading};
}
