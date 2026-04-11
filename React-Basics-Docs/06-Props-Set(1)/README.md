# 📘 React Props – Set 1

> Learn how to pass and use data between components in React using props.

---

## 🔥 Overview

Props (Properties) are used to pass data from **parent components to child components**, enabling dynamic UI rendering.

---

## 🧠 Core Concept

```
Parent → Pass Props → Child → Render Dynamic Data
```

---

## 📦 What are Props?

* Props are objects
* Used to pass data
* Read-only (immutable)

---

## 🧩 Passing Props

```jsx
<DemoComponent user="Ashutosh" />
```

---

## 🧩 Accessing Props

### Functional Component

```jsx
function DemoComponent(props) {
  return <h1>Hello {props.user}</h1>;
}
```

---

### Class Component

```jsx
class DemoComponent extends React.Component {
  render() {
    return <h1>Hello {this.props.user}</h1>;
  }
}
```

---

## ⚙️ Example

```jsx
function DemoComponent(props) {
  return (
    <div>
      <h2>Hello {props.user}</h2>
      <h3>Welcome</h3>
    </div>
  );
}

<DemoComponent user="Geeks" />
```

---

## 🔄 Parent to Child Communication

Props enable communication between components.

```jsx
function Parent() {
  return <Child name="User" userId="5555" />;
}

function Child(props) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <h3>User ID: {props.userId}</h3>
    </div>
  );
}
```

---

## 🧠 this.props (Class Components)

```jsx
console.log(this.props);
```

Output:

```
{ name: "User", userId: "5555" }
```

---

## ⚠️ Important Rules

* Props are read-only
* Cannot be modified
* Passed only from parent to child

---

## 🚀 Benefits

* Makes components reusable
* Enables dynamic UI
* Improves component communication

---

## 📌 Best Practices

* Keep props simple
* Use descriptive names
* Avoid modifying props
* Pass only required data

---

## 🎯 Interview Questions

* What are props in React?
* Difference between props and state?
* Why are props read-only?
* How to pass data between components?

---

## ✍️ My Understanding

Props act as a communication bridge between components, allowing data to flow from parent to child efficiently.

---

## ⚡ Quick Revision

* Props = data passing
* Parent → Child
* Read-only
* Used for dynamic rendering

---

## 📌 Next Topic

👉 Props – Set 2
