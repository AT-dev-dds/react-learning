import { BrowserRouter,Routes,Route} from 'react-router'

import AddProducts from "./pages/AddProducts"
import Products from "./pages/Products"


function App() {


  return (
    <>
<BrowserRouter>
<Routes>
 <Route path='/' element={<Products/>} />
  <Route path='/addProduct' element={<AddProducts/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
