import { useState } from 'react'

import './App.css'
import CartContext from './context/CartContext'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function App() {


  return (
    <>
     <CartContext>
      <ProductList/>
      <Cart/>
     </CartContext>
    </>
  )
}

export default App
