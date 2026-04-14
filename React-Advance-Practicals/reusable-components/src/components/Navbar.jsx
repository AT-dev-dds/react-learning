import React from 'react'
import Button from '../components/Button.jsx'


export default function Navbar({status}) {

    console.log("Navbar Called")
  return (
   !status ? <div>
      <h1>Hello welcome to navbar !</h1>
    </div>: <h1>PLease Login to see more!</h1>
  )
}
