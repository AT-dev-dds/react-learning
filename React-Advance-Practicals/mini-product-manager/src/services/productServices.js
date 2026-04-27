import axios from 'axios'


export const getProducts=async()=>{
    const res= await axios.get("https://dummyjson.com/products");

    return res.data.products
}


export const postProducts=async(data)=>{
    const res=await axios.post("https://dummyjson.com/products/add",data);
   return res.data;

};


export const deleteProducts=async(id)=>{
   const res= await axios.delete(`https://dummyjson.com/products/${id}`);
   return res.data;
}

export const updateProduct=async({id,data})=>{
    const res= await axios.put(`https://dummyjson.com/products/${id}`,data);
    return res.data;
}