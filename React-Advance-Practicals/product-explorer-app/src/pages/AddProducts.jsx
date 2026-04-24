import React, { useState } from 'react'
import {addItem} from '../features/products/productThunk'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router'

export default function AddProducts() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

    const [formData,setFormData]= useState({
        title:"",
        price:""
    });

    const handleChange=(e)=>{
        
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       dispatch(addItem(formData));
       navigate("/")

    }

  return (
    <>
    <form onSubmit={handleSubmit}>

      <input type="text" name="title" placeholder='Product title' onChange={handleChange} />

      <input type="number" name="price" placeholder='price' onChange={handleChange} />

      <button type="submit">Add Product</button>

    </form>
    </>
  )
}
