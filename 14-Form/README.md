
# React Forms & Controlled Components

## 📌 Overview
React forms handle user input using state instead of the DOM.

---

## ⚙️ Core Idea
- HTML → DOM handles data  
- React → State handles data  

This is called a **Controlled Component**.

---

## 🎯 Controlled Component

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
````

---

## 💻 Example

```jsx
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🔑 Key Points

* useState manages input
* value binds state
* onChange updates state
* preventDefault avoids reload

---

## ⚖️ HTML vs React

| Feature | HTML | React |
| ------- | ---- | ----- |
| Data    | DOM  | State |
| Reload  | Yes  | No    |

---

## 🚀 Best Practices

* Use controlled components
* Keep state clean
* Handle forms properly

---

## 🎯 Use Cases

* Login forms
* Search bars
* User input handling

---

## ⚡ Quick Revision

* Controlled = state-based
* useState + onChange
* React manages forms

---

## 🧠 My Understanding

React forms improve control and predictability of user input.

---

## 🔜 Next Topic

* React js Hooks

```
```
