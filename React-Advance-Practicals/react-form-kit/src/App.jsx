import ProtectedRoutes from "./components/ProtectedRoutes"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import {Routes,Route,BrowserRouter} from 'react-router'

function App() {
  
  return (
    <>
    <BrowserRouter>
    
    <Routes>

<Route path="/" element={<Login/>}/>
<Route path="/dashboard" element={
  <ProtectedRoutes>
<Dashboard/>
</ProtectedRoutes>}/>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
