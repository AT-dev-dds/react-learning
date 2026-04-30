import React,{useEffect} from 'react'

export default function Dashboard() {

    useEffect(()=>{
      console.log("Dashboard Re-rendered")
    },[]);

  return (
    <div>
      <h2>Dashboard page</h2>
    </div>
  )
}
