import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TimeCounter from './components/TimeCounter'
// import DisplayUserProfile from './components/DisplayUserProfile'
// import ShowLoadingState from './components/ShowLoadingState'
// import List from './components/List'
import ListWithClickEvent from './components/ListWithClickEvent'

function App() {


  return (
    <>
      <div>
        <h1>React Learning</h1>
        <TimeCounter/>
        {/* <DisplayUserProfile/>
        <ShowLoadingState/>
        <List/> */}

        <ListWithClickEvent/>
      </div>
    </>
  )
}

export default App
