# 📘 React useRef Hook

> Learn how to persist values and access DOM elements without causing re-renders.

---

## 🔥 Overview

The `useRef` Hook allows you to store mutable values that persist across renders **without triggering re-renders**.

---

## 🧠 Core Concept

```id="r1ghcore"
Store Value → No Re-render → Efficient Performance
```

---

## ⚙️ Syntax

```jsx id="r1ghsyntax"
const ref = useRef(initialValue);
```

---

## 🚀 Key Features

* Persist values across renders
* No re-render on update
* Direct DOM access

---

## 🧩 Example: Render Counter

```jsx id="r1ghex1"
const count = useRef(0);

useEffect(() => {
  count.current += 1;
});
```

---

## 🧩 Example: Access DOM

```jsx id="r1ghex2"
const inputRef = useRef();

const focusInput = () => {
  inputRef.current.focus();
};

<input ref={inputRef} />
```

---

## 🧩 Example: Previous State

```jsx id="r1ghex3"
const prevValue = useRef("");

useEffect(() => {
  prevValue.current = inputValue;
}, [inputValue]);
```

---

## ⚖️ useRef vs useState

| Feature   | useRef       | useState   |
| --------- | ------------ | ---------- |
| Re-render | No           | Yes        |
| Mutable   | Yes          | No         |
| Usage     | Store values | UI updates |

---

## 📌 Use Cases

* DOM manipulation
* Previous state tracking
* Performance optimization

---

## 🎯 Interview Questions

* What is useRef?
* Does useRef cause re-render?
* Difference between useRef and useState?
* When to use useRef?

---

## ✍️ My Understanding

useRef is used to store values and access DOM elements without triggering re-renders, improving performance and control.

---

## ⚡ Quick Revision

* useRef = persistent value
* No re-render
* Access DOM
* Uses `.current`

---

## 📌 Next Topic

👉 React Js Forms
