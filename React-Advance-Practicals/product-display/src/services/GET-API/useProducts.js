import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function useProducts() {

    const [products,setProducts]=useState([]);
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
    const fetchProducts=async()=>{
       try{
        const res=await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
       }catch(err){
         setError(err);
       }
       finally{
        setIsLoading(false);
       }
    };
    fetchProducts();
    },[])


  return {products,error,isLoading} ;
}
