
# ⚛️ React Lists

## 🧠 Overview
React lists are used to render multiple elements dynamically from arrays or objects.

👉 Helps build scalable and reusable UI.

---

## 🔁 Rendering Lists with map()

```js
const items = ['Apple', 'Banana', 'Cherry'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
````

---

## 🔑 Key Prop (Important)

- Identifies each element uniquely
    
- Helps React optimize rendering
    
- Prevents unexpected UI behavior
    

📌 Best Practice:

- Use unique `id`
    
- Avoid using index if list changes
    

---

## 📦 Lists with Objects

```js
const users = [
  { id: 1, name: 'A', age: 20 },
  { id: 2, name: 'B', age: 25 }
];

<ul>
  {users.map(user => (
    <li key={user.id}>
      {user.name} - {user.age}
    </li>
  ))}
</ul>
```

---

## 🔀 Conditional Rendering in Lists

```js
{users.map(user =>
  user.age > 30 ? (
    <li key={user.id}>Above 30</li>
  ) : (
    <li key={user.id}>Below 30</li>
  )
)}
```

---

## 🖱️ List with Events

```js
const handleClick = (item) => {
  alert(item);
};

{items.map((item, index) => (
  <button key={index} onClick={() => handleClick(item)}>
    {item}
  </button>
))}
```

---

## ⚡ Key Points

- Use `.map()` to render lists
    
- Always provide a `key` prop
    
- Prefer unique IDs
    
- Lists can include conditions and events
    

---

## 🎯 Use Cases

- Product listings
    
- User dashboards
    
- Todo applications
    

---

## 🚀 Summary

React lists enable dynamic UI renderin
# ⚛️ React Lists

## 🧠 Overview
React lists are used to render multiple elements dynamically from arrays or objects.

👉 Helps build scalable and reusable UI.

---

## 🔁 Rendering Lg using arrays and improve performance with proper key usage.

```

---
