import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TimeCounter from './components/TimeCounter'

function App() {


  return (
    <>
      <div>
        <h1>React Learning</h1>
        <TimeCounter/>
      </div>
    </>
  )
}

export default App
