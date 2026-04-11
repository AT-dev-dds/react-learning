
# 📘 React Components 

> A complete guide to understanding React components and how they power modern UI development.

---

## 🔥 What are React Components?

React components are reusable building blocks used to create user interfaces.  
They handle logic, manage data, and render UI efficiently.

---

## 🧠 Core Concept

```

User Action → State Update → Re-render → Virtual DOM → Diffing → Real DOM

````

---

## ⚙️ Basic Example

```jsx
function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}
````

---

## 🧩 Types of Components

### 1. Functional Components (Recommended)

* Simple JavaScript functions
* Use hooks for state and lifecycle
* Cleaner and modern approach

```jsx
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---

### 2. Class Components

* ES6 classes
* Use `this.state` and lifecycle methods

```jsx
class Greet extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

---

## 🧠 Core Concepts

### Props (Data from Parent)

* Read-only
* Used for passing data

```jsx
<Greet name="Adam" />
```

---

### State (Internal Data)

* Managed inside component
* Triggers re-render on update

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

### Rendering a Component

```js
ReactDOM.render(<Greeting />, document.getElementById('root'));
```

---

### Component Composition

```jsx
function Header() {
  return <h1>Header</h1>;
}

function Footer() {
  return <p>Footer</p>;
}

function App() {
  return (
    <>
      <Header />Got it — here is your **fully cleaned, properly structured, copy-paste ready GitHub README** ✅
(no formatting issues, all sections aligned, code blocks fixed)

---

```md
      <Footer />
    </>
  );
}
```

---

## ⚡ How React Works

1. User triggers an action
2. State updates
3. Component re-renders
4. Virtual DOM updates
5. React updates only changed parts

---

## 📌 Best Practices

* Keep components small and reusable
* Prefer functional components
* Use hooks (`useState`, `useEffect`)
* Lift state when sharing data

---

## ❌ Common Mistakes

* Creating large components
* Mutating props
* Not managing state properly
* Unnecessary re-renders

---

## 🎯 Interview Questions

* What are React components?
* Difference between functional and class components?
* What are props and state?
* How does React re-render components?

---

## ✍️ My Understanding

React components are reusable units that combine UI and logic.
They make applications modular, maintainable, and efficient.

---

## ⚡ Quick Revision

* Components = UI building blocks
* Props = input data
* State = internal data
* Re-render on state change
* Functional components preferred

---

## 📌 Next Topic

👉 Components Set2

```

---


