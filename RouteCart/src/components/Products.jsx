import React,{useContext} from 'react'
import {useNavigate} from 'react-router'
import {cartItems} from '../context/CartContext.jsx'


export default function Products() {

    const {dispatch}=useContext(cartItems);
    const Navigate=useNavigate();

 const products = [
  {
    id: "p1",
    title: "Wireless Headphones",
    price: 1999,
    description: "High-quality wireless headphones with noise cancellation.",
    category: "electronics",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    stock: 12,
  },
  {
    id: "p2",
    title: "Smart Watch",
    price: 2999,
    description: "Track your fitness and notifications with this smart watch.",
    category: "electronics",
    image: "https://via.placeholder.com/150",
    rating: 4.2,
    stock: 8,
  },
  {
    id: "p3",
    title: "Running Shoes",
    price: 1499,
    description: "Comfortable running shoes for daily workouts.",
    category: "fashion",
    image: "https://via.placeholder.com/150",
    rating: 4.0,
    stock: 20,
  },
  {
    id: "p4",
    title: "Backpack",
    price: 999,
    description: "Durable backpack suitable for travel and daily use.",
    category: "accessories",
    image: "https://via.placeholder.com/150",
    rating: 4.3,
    stock: 15,
  },
];


const handleClick=(product)=>{
    dispatch({type:"ADD_TO_CART",payload:product})
    Navigate("/cart");
}

  return (
   <>
   {
    products.map((product)=><div key={product.id}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h5 className="text-muted">{product.price}</h5>
        <button onClick={()=>handleClick(product)}>Add to cart</button>
    </div>)
   }
   </>
  )
}
