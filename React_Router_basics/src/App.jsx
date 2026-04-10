import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router'
import './App.css'
import Home from './components/Home'
import Profle from './components/Profile'

import CourseList from './components/CourseList'
import CourseDetails from './components/CourseDetails'

function RouterLogger(){
const location=useLocation();
  useEffect(()=>{
    console.log("Route changed to :"+location.pathname)
  },[location])
}


function App() {

  return (
    <>
      <BrowserRouter>
      <RouterLogger/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profle/>} />
        <Route path="/courses" element={<CourseList/>}/>
        <Route path='/courses/:courseId' element={<CourseDetails/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
