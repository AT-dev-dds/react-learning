
# ⚡ React Performance Hooks — useMemo & useCallback

> 🚀 Optimize your React apps by avoiding unnecessary re-renders and expensive recalculations.

---

## 📌 Overview

Performance Hooks in React help improve efficiency by controlling when computations and functions are re-executed.

As applications grow, frequent re-renders can lead to:
- ⚠️ Unnecessary calculations  
- ⚠️ Unwanted component re-renders  

👉 React provides built-in solutions:
- **useMemo** → Memoizes values  
- **useCallback** → Memoizes functions  

---

## ⚙️ Core Concept

React re-renders components whenever state or props change.

But not everything needs to run again.

👉 Performance Hooks help you:
- Skip unnecessary work  
- Improve speed  
- Maintain clean rendering behavior  

---

# 🧩 useMemo — Memoizing Values

## 📖 Definition

`useMemo` caches the result of a computation and only recalculates it when its dependencies change.

---

## ⚙️ Syntax

```jsx
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
````

---

## 💡 How It Works

* Executes the function once
* Stores the result in memory
* Recomputes ONLY when dependencies change

---

## 💻 Example — Expensive Calculation

```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Calculation: {expensiveCalculation}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default App;
```

---

## 🔍 Key Insight

* ✅ Runs when `count` changes
* ❌ Skips when `text` changes

👉 Result: Better performance by avoiding unnecessary recalculations

---

# 🧩 useCallback — Memoizing Functions

## 📖 Definition

`useCallback` returns a memoized version of a function that only changes when its dependencies change.

---

## ⚙️ Syntax

```jsx
const memoizedFunction = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## 💡 Why It Matters

In React:

* Functions are recreated on every render
* This can trigger unnecessary re-renders in child components

👉 `useCallback` prevents this by keeping the same function reference

---

## 💻 Example — Prevent Unnecessary Re-render

```jsx````md
import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </>
  );
}
```

---

## 🔍 Key Insight

* ❌ Without `useCallback` → Child re-renders every time
* ✅ With `useCallback` → Function stays stable → No extra re-render

---

# ⚖️ useMemo vs useCallback

| Feature  | useMemo                | useCallback              |
| -------- | ---------------------- | ------------------------ |
| Purpose  | Memoize computed value | Memoize function         |
| Returns  | Value                  | Function                 |
| Use Case | Expensive calculations | Prevent child re-renders |

---

## 🔑 Key Points

* `useMemo` → Optimizes calculations
* `useCallback` → Optimizes function references
* Both rely on dependency arrays
* Useful in performance-critical components

---

## 🚀 Best Practices

* ✅ Use only when needed
* ❌ Avoid premature optimization
* ✅ Keep dependency arrays accurate
* ✅ Use in large/complex components

---

## 🎯 Use Cases

* Filtering large datasets
* Expensive computations
* Passing callbacks to child components
* Performance tuning in large apps

---

## ⚡ Quick Revision

* useMemo → caches value
* useCallback → caches function
* Dependency array controls execution
* Improves performance

---

## 🧠 My Understanding

Performance hooks help control unnecessary re-renders by caching values and functions, making React apps faster and more efficient.

---

## 🔜 Next Topic

* React Routing

```
```
