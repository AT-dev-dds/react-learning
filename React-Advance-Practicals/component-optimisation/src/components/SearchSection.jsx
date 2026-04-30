import React, { useEffect, useState ,Suspense} from "react";
import ProductList from "./ProductList";
import HeavyChart from "./HeavyChart";

const ExpensiveComponent=React.lazy(()=>import('./ExpensiveComponent'));


export default function SearchSection() {
  const [search, setSearch] = useState("");
  const [debouncedSearch,setDebouncedSearch]=useState("");
  const [count, setCount] = useState(0); // unrelated state
  const [show,setShow]=useState(false);

  console.log("SearchSection rendered");

  useEffect(()=>{
    const timer= setTimeout(() => {
        setDebouncedSearch(search);
    }, 1000);

   return()=>{
     clearTimeout(timer);
   }
  },[search]);


  const handleShow=()=>{
    if(!show){
      return setShow(true)
    }
    return setShow(false)
  }

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Increase Count ({count})
      </button>

      <button onClick={handleShow} >
        Show Analytics
      </button>

      <ProductList search={debouncedSearch} />

     {
        show &&
         <Suspense fallback={<h3>Loading Expensive calculation</h3>}>
        
             <ExpensiveComponent />
        
      </Suspense>
     }

      <HeavyChart/>
    </div>
  );
}