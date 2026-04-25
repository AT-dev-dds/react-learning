import React from 'react'
import {fetchProducts} from '../api/apiProducts.js'
import {useQuery} from '@tanstack/react-query'

export default function Products() {

    const {data,isLoading,error,isError} = useQuery({
        queryKey:["products"],
        queryFn:fetchProducts,
        staleTime:5000
    });

    if(isLoading) return <h2>Loading......</h2>;

    if(isError) return <h2>Error in fetching products!</h2>;

    if(error) return console.log(error.message);

  return (
    <>
    {
        data.map((product)=><div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>)
    }
    </>
  )
}
