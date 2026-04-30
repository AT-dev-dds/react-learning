import React from "react";

const ExpensiveComponent = React.memo(() => {
  console.log("ExpensiveComponent rendered");

  
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return <div>Expensive Calculation Done</div>;
});

export default ExpensiveComponent;