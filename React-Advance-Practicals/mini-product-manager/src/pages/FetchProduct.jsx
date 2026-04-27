import React from 'react'
import {useNavigate} from 'react-router'
import {useQuery} from '@tanstack/react-query'
import {getProducts} from '../services/productServices.js'
import DeleteProduct from './DeleteProduct.jsx';
import UpdateProduct from './UpdateProduct.jsx';

export default function FetchProduct() {

    
    const {data,isLoading,error,isError}=useQuery({
        queryKey:["products"],
        queryFn: getProducts,
        staleTime:5000,
        refetchOnWindowFocus:false
    });

    const navigate= useNavigate();

    if(isLoading) return <h4>Loading...</h4>

    if(isError) return <h5>Error in fetching products!</h5>;

  return (
    <>
    {
        data?.map((product)=><div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            
            <DeleteProduct id={product.id}/>
            <UpdateProduct id={product.id} />
        </div>)
    }

    <button className='btn btn-info rounded-3' onClick={()=>navigate("/add-product")}>Add Product</button>
    </>
  )
}
