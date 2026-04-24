import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {resetState} from '../features/products/productSlices.js'
import { getProducts, getProductsById} from '../features/products/productThunk.js'
import {Link} from 'react-router'


export default function Products() {
   

    const dispatch=useDispatch();
    
    const {products,isLoading,singleProduct,messages,isError}=useSelector((state)=>state.product);

useEffect(() => {
  if (products.length === 0) {
    dispatch(getProducts());
  }

  dispatch(getProductsById(5));
}, [dispatch, products.length]);


useEffect(() => {
  if (isError || messages) {
    const timer = setTimeout(() => {
      dispatch(resetState());
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [isError, messages, dispatch]);

   if(isLoading){
   return <h2>Loading....</h2>
   }

   if(isError){
    return <h2 style={{color:"red"}}>{{messages} ||"Something went wrong!"} </h2>
   }

  return (
  <>
  {
    messages && !isError && <h3 style={{color:"green"}} >{messages}</h3>
  }
  {
    products.map((product)=><div key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <Link to={`/updateProduct/${product.id}`}>update product</Link>
        <Link to={`/deleteProduct/${product.id}`}>delete product</Link>
    </div>)
  }
  {
    singleProduct && (<div>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.price}</p>
        <p>{singleProduct.id}</p>
    </div>)
  }


<Link to={"/addProduct"}>Add product</Link>



  </>
  )
}
