import axios from 'axios'


export default async function loginUser(formData){

  try{
     const res= await axios.post("https://dummyjson.com/auth/login",{
        username: formData.username,
        password: formData.password
    });

    return res.data;
  }catch(err){
        console.log(err.message)
  }
}