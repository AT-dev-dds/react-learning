import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getProducts, getProductsById} from '../features/products/productThunk.js'


export default function Products() {
   

    const dispatch=useDispatch();
    
    const {products,isLoading,singleProduct}=useSelector((state)=>state.product);

   useEffect(()=>{
    dispatch(getProducts());

    dispatch(getProductsById(5));
  
   },[]);

   if(isLoading){
   return <h2>Loading....</h2>
   }

  return (
  <>
  {
    products.map((product)=><div key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
    </div>)
  }
  {
    singleProduct && (<div>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.price}</p>
        <p>{singleProduct.id}</p>
    </div>)
  }
  </>
  )
}
