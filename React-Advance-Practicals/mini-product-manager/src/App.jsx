
// import './App.css'

import AddProducts from "./pages/AddProducts"
import FetchProduct from "./pages/FetchProduct"
import {BrowserRouter,Routes,Route} from 'react-router'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>

       <Route path="/" element={<FetchProduct/>}/>
       <Route path="/add-product" element={<AddProducts/>} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
