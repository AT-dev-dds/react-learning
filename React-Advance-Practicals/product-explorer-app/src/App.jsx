import { BrowserRouter,Routes,Route} from 'react-router'

import AddProducts from "./pages/AddProducts"
import Products from "./pages/Products"
import UpdateProduct from './pages/UpdateProduct'


function App() {


  return (
    <>
<BrowserRouter>
<Routes>
 <Route path='/' element={<Products/>} />
  <Route path='/addProduct' element={<AddProducts/>} />
  <Route path='/updateProduct' element={<UpdateProduct/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
