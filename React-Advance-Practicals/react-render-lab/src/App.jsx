
// import React, { useState } from "react";
// import { useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   },[]);

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// const Child = React.memo(function Child({ onClick }) {
//   console.log("Child rendered");

//   return <button onClick={onClick}>Click Me</button>;
// });

// export default App;














// import React, { useState,useMemo,useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const products = useMemo(()=>[
   
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" },
//     { id: 3, name: "Tablet" },
  
//   ],[])

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>

//       <ProductList products={products} />
//     </div>
//   );
// }

// function ProductList({ products }) {
//   console.log("ProductList rendered");
//    const handleClick = useCallback((id)=>{
   
//     console.log("Clicked:", id);

//    },[]);

//   return (
//     <div>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} onClick={handleClick} />
//       ))}
//     </div>
//   );
// }

// const ProductCard= React.memo(
//   function ProductCard({ product,onClick }) {
//   console.log("ProductCard rendered:", product.id);

//   return <div onClick={()=>onClick(product.id)}>{product.name}</div>;
// }
// )

// export default App;


import React,{Suspense} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'



const Home= React.lazy(()=>import('./pages/Home'));
const Dashboard= React.lazy(()=>import('./pages/Dashboard'));
const Contact=React.lazy(()=>import('./pages/Contact'));

export default function App() {
  return (
  <>
   

    <BrowserRouter>

    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={
          <Suspense fallback={<h2>Dashboard Loading.....</h2>} >
            <Dashboard/>
          </Suspense>
        }/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  </>
  )
}






