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
import AppendTextOnClick from './components/AppendTextOnClick'
import UseReducerCounter from './components/UseReducerCounter'
import ToggleMode from './components/ToggleMode'
import {UserProvider} from './components/User-Login-Display/UseContext'
import Dashboard from './components/User-Login-Display/Dashboard'
import { UserGreetings } from './components/User-Greeting-System/UserContext'
import Home from './components/User-Greeting-System/Home'
import ExpensiveCalculation from './components/ExpensiveCalculation'
import UseCallbackExample from './components/UseCallbackExample'

function App() {


  return (
    <>
      <div>
        <h1>React Learning</h1>
        {/* <TimeCounter/> */}
        {/* <DisplayUserProfile/>
        <ShowLoadingState/>
        <List/> */}

        {/* <ListWithClickEvent/>
        <TrackApplicationRendering/> */}

        {/* <FocusInput/> */}
        {/* <TrackPreviousState/> */}
        {/* <MyForm/> */}
        {/* <AppendTextOnClick/> */}
        {/* <UseReducerCounter/> */}
        {/* <ToggleMode/> */}
      {/* <UserProvider>
        <Dashboard />
      </UserProvider>
        */}

        {/* <UserGreetings>
          <Home/>
        </UserGreetings> */}

        {/* <ExpensiveCalculation/> */}
        <UseCallbackExample/>
      </div>
    </>
  )
}

export default App
