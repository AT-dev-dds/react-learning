import React from "react";
import { products } from "../../data.js";


const ProductList = React.memo(({ search }) => {
  console.log("ProductList rendered");

  const filtered = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filtered.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default ProductList;