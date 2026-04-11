
# 🔄 React useReducer Hook — Complete Guide

## 📌 Overview
The `useReducer` hook is a powerful alternative to `useState` for managing state in React, especially when the logic becomes complex or depends on previous values.

Instead of updating state directly, `useReducer` uses a **structured approach**:
👉 Action → Reducer → New State

---

## ⚙️ Core Idea

- `useState` → simple state updates  
- `useReducer` → complex & predictable state management  

👉 When your logic grows, move from `useState` → `useReducer`

---

## 🧩 Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
````

---

## 🧠 Key Parts

* **state** → current value
* **dispatch** → function to trigger update
* **reducer** → contains all logic
* **initialState** → starting state

---

## ⚙️ Reducer Function (Heart of useReducer)

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
```

👉 Reducer decides **HOW state changes**

---

## 💻 Full Example — Counter App

```jsx id="g3l2fn"
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
```

---

## 🔁 How It Works (Flow)

1. User interacts (click/button)
2. `dispatch({ type })` is called
3. Reducer receives `(state, action)`
4. Logic runs inside reducer
5. New state is returned
6. UI updates automatically

👉 **One-direction flow = predictable behavior**

---

## 🧠 Behind the Scenes

* `dispatch` does NOT update instantly
* It schedules update for next render
* Reducer always works with latest state
* React re-renders after state change

---

## 🌍 Real-World Analogy

| Concept  | Real World       |
| -------- | ---------------- |
| dispatch | Customer request |
| action   | Request type     |
| reducer  | Manager decision |
| state    | Updated system   |

👉 Easy way to remember:
**User → Request → Logic → Result**

---

## 🧪 Beginner Example — Theme Toggle

```jsx id="j9s4kp"
import { useReducer } from "react";

const initialState = { isDark: false };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDark: !state.isDark };

    default:
      return state;
  }
}

export default function ThemeToggle() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>{state.isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
}
```

---

## 🔑 Key Points

* Centralized logic → easier debugging
* Predictable updates → better control
* Great for multiple related states
* Cleaner code structure

---

## ⚖️ useState vs useReducer

| Feature     | useState    | useReducer          |
| ----------- | ----------- | ------------------- |
| Logic       | Simple      | Complex             |
| Structure   | Scattered   | Centralized         |
| Readability | Good        | Better (large apps) |
| Best Use    | Basic state | Advanced logic      |

---

## 🚀 Best Practices

* Keep reducer **pure** (no side effects)
* Use clear action types (`INCREMENT`, `RESET`)
* Split reducer if it becomes large
* Avoid using for simple states

---

## 🎯 Use Cases

* Complex forms
* Multi-step workflows
* Counters with multiple actions
* Global state (with Context API)

---

## ⚡ Quick Revision

* `useReducer` = structured state management
* `dispatch` → sends action
* `reducer` → updates state
* Best for complex logic

---

## 🧠 My Understanding

useReducer separates logic from UI, making state management clean, predictable, and scalable.

---

## 🔜 Next Topic

* Context API + useReducer
* Advanced State Management Patterns

```
```
