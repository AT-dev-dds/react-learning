import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import Cart from './components/Cart'
import CartContext from './context/CartContext'
import Layout from './components/Layout'

function App() {


  return (
    <>
   <CartContext>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}> 
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Route>
    
   </Routes>
   </BrowserRouter>
   </CartContext>
    </>
  )
}

export default App
