import React,{useContext} from 'react'
import {CartItems} from '../context/CartContext.jsx'
export default function Cart() {

    const {state,dispatch}=useContext(CartItems);
    
  return (
    <>
    {
        state.cart.map((item)=><div key={item.id}>
          <h1 className='text-dark'>{item.name}</h1>
          <h3>{item.price}</h3>
          <h3>{item.quantity} </h3>
          <div>
            <button onClick={()=>dispatch({type:"INCREASE_QUANTITY",payload:item.id})} className='btn btn-info rounded'>++ quantity</button>
          </div>
          <div>
            <button onClick={()=>dispatch({type:"DECREASE_QUANTITY",payload:item.id})} className='btn btn-warning rounded'>-- quantity</button>
          </div>
           <div>
            <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:item.id})} className='btn btn-danger rounded'>remove</button>
          </div>
        </div>)
    }
    </>
  )
}
