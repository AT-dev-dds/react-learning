import React, { useState } from 'react'
import useProducts from '../hooks/GET-API/useProducts.js'
export default function GetProductsByTitle() {

  const [search,setSearch]=useState("");

  const {products,error,isLoading}=useProducts(search);

  if(isLoading) return <h1>Loading....</h1>;
  if(error) return <h3>{error.message}</h3>;

  return (
   <>

   <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
   {
    products.map((product)=><div key={product.id}>
      <h1>{product.title}</h1>
      <p>{product.category}</p>
    </div>)
   }

   </>
  )
  
}
