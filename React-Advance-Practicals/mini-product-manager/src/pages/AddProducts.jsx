import React from 'react'
import {useMutation,useQueryClient} from '@tanstack/react-query'
import {postProducts} from '../services/productServices.js'
import { useState } from 'react';
import { useNavigate } from 'react-router';


export default function AddProducts() {

    const [formData,setFormData]=useState({
        title:"",
        price:""
    });

    const navigate=useNavigate();

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate({
            ...formData,
            price:Number(formData.price)
        });

        navigate("/");
      };
    

    const queryClient=useQueryClient();

    const mutation = useMutation({
        mutationFn:postProducts,
        onSuccess:(newProduct)=>{
            queryClient.invalidateQueries(["products"],(oldData)=>{
              if(!oldData) return newProduct;
              return [...oldData,newProduct];
            });
        },
        onError:(error)=>{
            console.log(error);
        }
    });

    
  return (
  <>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product title"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
        />

        <button type="submit">{ mutation.isLoading?"Adding...":"Loading...."}</button>
      </form>  
  </>
  )
}
