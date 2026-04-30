import React,{useEffect} from 'react'

export default function Contact() {

    useEffect(()=>{
      console.log("Contact Re-rendered")
    },[]);

  return (
  <>
    <div>
      <h2>Contact page</h2>
    </div>



  </>
  )
}
