import axios from 'axios'


export const getUser=async()=>{

    const token=localStorage.getItem("token");
  
    try{
         const res=await axios.get("https://dummyjson.com/auth/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return res.data;
    }catch(err){
        console.log(err.message);
    }
   

   

}