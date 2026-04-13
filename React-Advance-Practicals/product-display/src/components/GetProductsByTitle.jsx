import React from 'react'
import useProducts from '../services/GET-API/useProducts.js'
export default function GetProductsByTitle() {

  const {products,error,isLoading}=useProducts();

  if(isLoading) return <h1>Loading....</h1>;
  if(error) return <h3>{error.message}</h3>;

  return (
   <>
   {
    products.map((product)=><div key={product.id}>
      <h1>{product.title}</h1>
    </div>)
   }
   </>
  )
}
