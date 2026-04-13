import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function useProducts(search) {

    const [products,setProducts]=useState([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
   
    

    useEffect(()=>{

      const controller=new AbortController();
    const fetchProducts=async()=>{
       try{
        const res=await axios.get(`https://dummyjson.com/products/search?q=${search}`,
          {
            signal:controller.signal
          }
        );
        setProducts(res.data.products);
       }catch(err){
        if(axios.isCancel(err)){
             return;
        }
         setError(err);
       }
       finally{
        setIsLoading(false);
       }
    };
    fetchProducts();
    
    return ()=>{
      controller.abort();
    }

    },[search])


  return {products,error,isLoading} ;
}
