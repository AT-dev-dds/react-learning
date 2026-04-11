# 📘 React State

> Learn how React manages dynamic data using state and how it enables interactive UI.

---

## 🔥 Overview

State is a built-in object used to manage **data that changes over time** in a component.

It allows React to update the UI dynamically when data changes.

---

## 🧠 Core Concept

```id="s1ghcore"
User Interaction → State Update → Re-render → Updated UI
```

---

## ⚙️ useState Syntax

```jsx id="s1ghsyntax"
const [state, setState] = useState(initialState);
```

---

## 🧩 Creating State (Class Component)

```jsx id="s1ghex1"
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford"
    };
  }

  render() {
    return <h1>My Car</h1>;
  }
}
```

---

## 🔄 Updating State

```jsx id="s1ghex2"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}
```

---

## ⚠️ Important Rules

* Do not modify state directly
* Always use setState or useState
* State updates trigger re-render

---

## ⚖️ State vs Props

| Feature    | State        | Props        |
| ---------- | ------------ | ------------ |
| Ownership  | Component    | Parent       |
| Mutability | Mutable      | Read-only    |
| Purpose    | Dynamic data | Data passing |

---

## 🚀 Use Cases

* Forms
* Counters
* UI toggles
* API data handling

---

## 📌 Best Practices

* Keep state minimal
* Use functional updates (`prevState`)
* Avoid unnecessary state

---

## 🎯 Interview Questions

* What is state in React?
* Difference between state and props?
* Why use setState instead of direct update?
* When does React re-render?

---

## ✍️ My Understanding

State allows React components to manage dynamic data and automatically update the UI when changes occur.

---

## ⚡ Quick Revision

* State = dynamic data
* Triggers re-render
* Use setState/useState
* Do not mutate directly

---

## 📌 Next Topic

👉 Life Cycle of Components
