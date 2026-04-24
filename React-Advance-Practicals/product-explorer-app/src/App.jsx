import { BrowserRouter,Routes,Route} from 'react-router'

import AddProducts from "./pages/AddProducts"
import Products from "./pages/Products"
import UpdateProduct from './pages/UpdateProduct'
import DeleteProduct from './pages/DeleteProduct'


function App() {


  return (
    <>
<BrowserRouter>
<Routes>
 <Route path='/' element={<Products/>} />
  <Route path='/addProduct' element={<AddProducts/>} />
  <Route path='/updateProduct/:id' element={<UpdateProduct/>} />
   <Route path='/deleteProduct/:id' element={<DeleteProduct/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
