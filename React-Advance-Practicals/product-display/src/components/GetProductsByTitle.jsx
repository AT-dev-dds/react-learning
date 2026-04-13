import React, { useState } from 'react'
import useProducts from '../hooks/useProducts.js'
import useDebouncing from '../hooks/useDebouncing.js';
export default function GetProductsByTitle() {

  const [search,setSearch]=useState("");

  const debouncing=useDebouncing(search,500);

  const {products,error,isLoading}=useProducts(debouncing);

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
