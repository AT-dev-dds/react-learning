# 📘 React Keys

> Learn how React uses keys to efficiently update and manage list elements.

---

## 🔥 Overview

Keys are special attributes used to uniquely identify elements in a list.

They help React determine which elements have changed, been added, or removed.

---

## 🧠 Core Concept

```id="k1ghcore"
List → Key → Efficient Update → Optimized Rendering
```

---

## 🧩 Basic Example

```jsx id="k1ghex1"
const numbers = [1, 2, 3];

const listItems = numbers.map((num, index) => (
  <li key={index}>{num}</li>
));
```

---

## ⚠️ Issue with Index as Key

Using index as a key can cause:

* Incorrect UI updates
* Performance issues
* Loss of component state

---

## ✅ Best Practice

```jsx id="k1ghex2"
<li key={item.id}>{item.name}</li>
```

---

## 🧩 Keys with Components

### ❌ Incorrect Usage

```jsx id="k1ghex3"
function MenuItems(props) {
  return <li key={props.item}>{props.item}</li>;
}

function Navmenu(props) {
  return props.menuitems.map(item => (
    <MenuItems item={item} />
  ));
}
```

---

### ✅ Correct Usage

```jsx id="k1ghex4"
function MenuItems(props) {
  return <li>{props.item}</li>;
}

function Navmenu(props) {
  return props.menuitems.map(item => (
    <MenuItems key={item} item={item} />
  ));
}
```

---

## 📌 Key Rules

* Keys must be unique within a list
* Do not use unstable values
* Prefer IDs over index

---

## ⚖️ Keys vs Props

| Feature | Keys              | Props      |
| ------- | ----------------- | ---------- |
| Purpose | Identify elements | Pass data  |
| Access  | Not accessible    | Accessible |
| Usage   | Lists             | Components |

---

## 🚀 Benefits

* Efficient rendering
* Better performance
* Accurate UI updates

---

## 🎯 Interview Questions

* What are keys in React?
* Why are keys important?
* Why avoid index as key?
* Difference between keys and props?

---

## ✍️ My Understanding

Keys help React efficiently track elements in lists, ensuring proper updates and better performance.

---

## ⚡ Quick Revision

* Keys = unique identifier
* Used in lists
* Avoid index
* Improves rendering

---

## 📌 Next Topic

👉 React JS Refs
