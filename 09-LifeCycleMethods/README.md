# ⚛️ React Lifecycle (Quick Notes)

## 🧠 Overview
React lifecycle describes how a component is created, updated, and removed.

👉 Create → Update → Remove

---

## 🔁 Phases

### 1. Mounting
Component is added to the DOM.

- constructor()
- render()
- componentDidMount()

📌 Used for: API calls, initial setup

---

### 2. Updating
Triggered when state or props change.

- setState()
- render()
- componentDidUpdate()

📌 Used for: handling updates

---

### 3. Unmounting
Component is removed from the DOM.

- componentWillUnmount()

📌 Used for: cleanup (timers, listeners)

---

## ⚡ Key Methods (Important)

- componentDidMount() → API calls  
- componentDidUpdate() → after update  
- componentWillUnmount() → cleanup  

---

## 🔥 Modern Approach (Hooks)

```js
useEffect(() => {
  // Runs on mount & update

  return () => {
    // Cleanup on unmount
  };
}, []);