import React,{useContext} from 'react'
import {CartItems} from '../context/CartContext.jsx'



export default function ProductList() {

const {dispatch}=useContext(CartItems);

const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Shoes", price: 1000 }
];
   
  return (
    <>
    {
        products.map((product)=><div key={product.id}>
         <h1 className='text-dark'>Product Name:{product.name}</h1>
         <h4>Price:{product.price}</h4>
          <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}>Add Product</button>
       
         </div>)
    }
     
    </>
  )
}
