import axios from "axios"


export default async function authServices(formData) {

try{

 const res= await axios.post("https://dummyjson.com/auth/login",{
username: formData.username,
password: formData.password,
expiresInMins:30
 });

 return res.data;
}catch(err){
console.log(err.response?.data);
throw err;
}
  
}



// username: emilys
// password: emilyspass