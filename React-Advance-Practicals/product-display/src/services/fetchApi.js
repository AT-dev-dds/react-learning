// import React,{useEffect,useState} from 'react'


// export default function fetchApi() {
  
//     const[data,setData]=useState([]);
//     const[loading,setLoading]=useState(true);
//     const[error,setError]=useState(null);

//     useEffect(()=>{
     
//     fetch("https://dummyjson.com/products")
//         .then(res=>res.json())
//         .then(res=>setData(res.products))
//         .catch(e=>setError(e))
//         .finally(setLoading(false))
      
//     },[]);

//    return {data,loading,error};
// }




// Another way to do


import {useState,useEffect} from 'react'
import axios from 'axios'

 

    

//  export default  function FetchApi(){
//     const[data,setData]=useState([]);
//     const[loading,setLoading]=useState(true);
//     const[error,setError]=useState(null);
   
//     useEffect(()=>{
//          async function fetchData(){
//       try{
//        const res= await axios("https://dummyjson.com/products");
//        const result=res.data;
//        setData(result.products);
//        }catch(err){
//        setError(err.message)
//        }
//        finally{
//         setLoading(false);
//        }
//          }
//          fetchData();
//     },[]);
    
//    return {data,loading,error}
//  }