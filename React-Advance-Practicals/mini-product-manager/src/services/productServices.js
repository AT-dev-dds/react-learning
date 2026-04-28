import axios from 'axios'




export const getProducts=async({search=""})=>{

    let url="/products";

    const params={};

    if(search){
        url="/products/search";
        params.q=search
    }
    const res= await axios.get(`https://dummyjson.com${url}`,{params});

    return res.data;
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