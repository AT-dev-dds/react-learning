# 📘 React Components – Composition & Decomposition

> Understanding how React components can be combined and broken down for better scalability and reusability.

---

## 🔥 Overview

React promotes building UI using small, reusable components.

There are two important concepts:

* **Composition** → Combining components
* **Decomposition** → Breaking components

---

## 🧠 Core Concept

```
Small Components → Combine → Complex UI  
Large Component → Break → Reusable Units
```

---

## 🧩 Component Composition

Component composition means combining multiple smaller components into a single parent component.

### 💻 Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => <h1>This is Navbar.</h1>;
const Sidebar = () => <h1>This is Sidebar.</h1>;
const ArticleList = () => <h1>This is Articles List.</h1>;

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <ArticleList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

---

## 🧩 Component Decomposition

Decomposition means breaking a large component into smaller reusable parts.

---

### ❌ Without Decomposition

```jsx
const Form = () => {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};
```

---

### ✅ With Decomposition

```jsx
const Input = () => <input type="text" />;
const Button = () => <button>Submit</button>;

const Form = () => {
  return (
    <div>
      <Input />
      <Input />
      <Button />
    </div>
  );
};
```

---

## ⚖️ Composition vs Decomposition

| Concept       | Description                              |
| ------------- | ---------------------------------------- |
| Composition   | Combine small components into one        |
| Decomposition | Break large components into smaller ones |

---

## 🚀 Benefits

* Improves reusability
* Reduces code duplication
* Enhances maintainability
* Makes code modular

---

## 📌 Best Practices

* Keep components small and focused
* Reuse components wherever possible
* Break complex UI into smaller parts
* Combine components to build features

---

## 🎯 Interview Questions

* What is component composition in React?
* What is component decomposition?
* Why is decomposition important?
* How does React promote reusability?

---

## ✍️ My Understanding

React encourages breaking UI into small reusable components and combining them to build complex applications efficiently.

---

## ⚡ Quick Revision

* Composition = combine components
* Decomposition = break components
* Small components = reusable
* Modular design = scalable apps

---

## 📌 Next Topic

👉 Fragments
