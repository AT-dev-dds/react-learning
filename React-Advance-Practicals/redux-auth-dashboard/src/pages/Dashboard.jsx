
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../auth/authSlices.js'
import { useNavigate } from 'react-router'

export default  function Dashboard() {

 const user= useSelector((state)=>state.auth.user);



 const dispatch=useDispatch();

 const navigate=useNavigate();
   
  return (
   <>

   <h2>{user?.username}</h2>

   <button onClick={()=>{
    dispatch(logout());
    localStorage.clear("token");
    navigate("/")
   }}>Logout</button>
   </>
  )
}
