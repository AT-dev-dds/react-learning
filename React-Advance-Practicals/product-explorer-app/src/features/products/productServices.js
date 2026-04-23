import axios from 'axios'


export const fetchProduct=async()=>{
   try{
 const res= await axios.get("https://dummyjson.com/products");
    return res.data.products;
   }catch(err){

   }
}


export const fetchProductById=async(id)=>{

    const res= await axios.get(`https://dummyjson.com/products/${id}`);

    return res;
}