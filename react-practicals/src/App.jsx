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
import TrackApplicationRendering from './components/TrackApplicationRendering'
import FocusInput from './components/FocusInput'
import TrackPreviousState from './components/TrackPreviousState'
import MyForm from './components/MyForm'

function App() {


  return (
    <>
      <div>
        <h1>React Learning</h1>
        <TimeCounter/>
        {/* <DisplayUserProfile/>
        <ShowLoadingState/>
        <List/> */}

        {/* <ListWithClickEvent/>
        <TrackApplicationRendering/> */}

        {/* <FocusInput/> */}
        {/* <TrackPreviousState/> */}
        <MyForm/>
      </div>
    </>
  )
}

export default App
