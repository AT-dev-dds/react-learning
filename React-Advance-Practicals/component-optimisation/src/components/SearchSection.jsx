import React, { useState } from "react";
import ProductList from "./ProductList";
import ExpensiveComponent from "./ExpensiveComponent";
import HeavyChart from "./HeavyChart";

export default function SearchSection() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0); // unrelated state

  console.log("SearchSection rendered");

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

      <ProductList search={search} />

      <ExpensiveComponent />
      <HeavyChart/>
    </div>
  );
}