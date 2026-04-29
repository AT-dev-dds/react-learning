import React, { useState,useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const products = useMemo(()=>[
   
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
  
  ],[])

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <ProductList products={products} />
    </div>
  );
}

function ProductList({ products }) {
  console.log("ProductList rendered");

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

const ProductCard= React.memo(
  function ProductCard({ product }) {
  console.log("ProductCard rendered:", product.id);

  return <div>{product.name}</div>;
}
)

export default App;