import React from 'react'
import {Link} from 'react-router'

export default function Home() {
  return (
    <div>
      <h2>Home Page....</h2>
  <Link to="/">Home</Link>
  <Link to="/dashboard">Dashboard</Link>
  <Link to="/contact">Contact</Link>
    </div>
  )
}
