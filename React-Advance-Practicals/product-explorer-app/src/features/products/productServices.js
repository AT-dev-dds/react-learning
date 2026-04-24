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

export const addProduct=async(data)=>{
   const res= await axios.post("https://dummyjson.com/products/add",data);
   return res.data;
};



export const updateProduct=async({data,id})=>{

   const res=await axios.put(`https://dummyjson.com/products/${id}`,data);
   return res.data;
}


export const deleteProduct=async(id)=>{
   const res=await axios.delete(`https://dummyjson.com/products/${id}`);
   return res;
}