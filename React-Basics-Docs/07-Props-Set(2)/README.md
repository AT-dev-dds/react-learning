# 📘 React Props – Set 2

> Learn advanced usage of props including default values, arrays, and dynamic rendering.

---

## 🔥 Overview

This section covers:

* defaultProps
* Passing arrays as props
* Rendering lists using map()

---

## 🧠 Core Concept

```id="p2ghcore"
Props + Default Values + Arrays → Dynamic Rendering
```

---

## 🧩 defaultProps

defaultProps provide default values for props when none are passed.

### 💻 Example

```jsx id="p2ghex1"
class ExampleClass extends React.Component {
  render() {
    return (
      <h1>This is {this.props.title}'s Website!</h1>
    );
  }
}

ExampleClass.defaultProps = {
  title: "GeeksforGeeks"
};
```

---

## 🧩 Passing Arrays as Props

Props can contain arrays and other data types.

```jsx id="p2ghex2"
class ExampleClass extends React.Component {
  render() {
    return (
      <h1>{this.props.names}</h1>
    );
  }
}

ExampleClass.defaultProps = {
  names: ["Ram", "Shyam", "Raghav"]
};
```

---

## ⚠️ Issue

Directly rendering arrays leads to poor UI formatting.

---

## 🧩 Using map() for Rendering

```jsx id="p2ghex3"
class ExampleClass extends React.Component {
  render() {
    return (
      <div>
        {this.props.names.map((item, index) => (
          <p key={index}>
            Student {index + 1}: {item}
          </p>
        ))}
      </div>
    );
  }
}

ExampleClass.defaultProps = {
  names: ["Ram", "Shyam", "Raghav"]
};
```

---

## 🚀 Benefits

* Cleaner UI
* Better readability
* Dynamic rendering
* Reusable components

---

## 📌 Best Practices

* Use defaultProps for fallback values
* Use map() to render lists
* Always provide a key
* Avoid rendering raw arrays

---

## ⚠️ Important Rules

* Props are read-only
* defaultProps used only when props are missing
* Proper formatting improves UX

---

## 🎯 Interview Questions

* What is defaultProps?
* How to pass arrays in props?
* Why use map() in React?
* What is the role of key in lists?

---

## ✍️ My Understanding

defaultProps ensure fallback values, while map() helps render structured and dynamic UI from array data.

---

## ⚡ Quick Revision

* defaultProps = default values
* Props can store arrays
* Use map() for rendering
* Always use key

---

## 📌 Next Topic

👉 React State
