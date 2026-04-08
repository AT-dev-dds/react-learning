import React,{useState,useEffect} from 'react'

export default function ShowLoadingState() {

    const[isLoading,setIsLoading]=useState(true);
    const[data,setData]=useState(null);

    useEffect(()=>{
       setTimeout(()=>{
        setData("Fetched Data")
        setIsLoading(false);
       },2000)
    },[])
  return (
    <>
  {
    isLoading?<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
:data
  }
    </>
  )
}
