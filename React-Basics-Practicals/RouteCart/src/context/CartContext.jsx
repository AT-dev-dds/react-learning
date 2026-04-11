import React,{useContext,useReducer} from 'react'
import {cartReducer} from './cartReducer.js'
import { createContext } from 'react'

export const cartItems=createContext();

export default function CartContext({children}) {

    const [state,dispatch]=useReducer(cartReducer,{
        cart:[]
    });
  return (
    <>
    <cartItems.Provider value={{cart:state.cart,dispatch}}>
      {children}
    </cartItems.Provider>
    </>
  )
}
