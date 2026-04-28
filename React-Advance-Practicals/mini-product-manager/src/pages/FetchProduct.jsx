import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import {useQuery} from '@tanstack/react-query'
import {getProducts} from '../services/productServices.js'
import DeleteProduct from './DeleteProduct.jsx';
import UpdateProduct from './UpdateProduct.jsx';

export default function FetchProduct() {

  const [search,setSearch]=useState("");
  const [debouncedSearch,setDebouncedSearch]=useState("");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebouncedSearch(search);
    },500);

    return ()=> clearTimeout(timer);
  },[search])
    
    const {data,isLoading,error,isError}=useQuery({
        queryKey:["products",debouncedSearch],
        queryFn:()=> getProducts({search: debouncedSearch}),
        staleTime:5000,
        refetchOnWindowFocus:false
    });

    const handleChange=(e)=>{
      setSearch(e.target.value);
    }

    const navigate= useNavigate();

    if(isLoading) return <h4>Loading...</h4>

    if(isError) return <h5>Error in fetching products!</h5>;

  return (
    <>

    <div>
      <input type="text" placeholder='search products' onChange={handleChange} value={search} />
    </div>
    
    {
        data?.products?.map((product)=><div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            
            <DeleteProduct id={product.id} search={search}/>
            <UpdateProduct id={product.id} search={search}/>
        </div>)
    }

    <button className='btn btn-info rounded-3' onClick={()=>navigate("/add-product")}>Add Product</button>
    </>
  )
}
