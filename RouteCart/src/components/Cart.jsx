import React from 'react'
import { useContext } from 'react'
import { cartItems } from '../context/CartContext'

export default function Cart() {

    const {cart}=useContext(cartItems);
  return (
    <>
    <h2>Cart</h2>

    {
       cart.length===0?
       <p>No items in the cart</p>:
       cart.map((c)=><div key={c.id}>
        {c.title} - ₹{c.price}
       </div>)
    }
    </>
  )
}
