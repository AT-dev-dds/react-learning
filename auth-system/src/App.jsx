import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AuthContext from './context/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
   <AuthContext>
    <Login/>
    <Navbar/>
    <Dashboard/>
   </AuthContext>
    </>
  )
}

export default App
