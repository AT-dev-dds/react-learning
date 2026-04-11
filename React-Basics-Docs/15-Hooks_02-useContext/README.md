# 🧠 React `useContext` Practice Guide

## 📌 Overview

The `useContext` hook allows functional components to access shared/global data without prop drilling.

It is useful when:

* The same data is required across multiple components
* Passing props manually becomes complex
* Managing global-like state (auth, theme, cart, etc.)

---

## 🚀 Practice Problems

---

### 🟢 1. User Greeting System

#### 📁 File Structure

```
src/
├── components/
│   ├── Home.jsx
│   └── Header.jsx
├── context/
│   └── UserContext.jsx
├── App.jsx
```

#### 🧠 Problem

Store a user name in context and display it in multiple components (e.g., Header and Home).

#### 🎯 Objective

Understand how to:

* Create and provide context
* Consume context in different components
* Avoid prop drilling

---

### 🟢 2. Simple Auth Status

#### 📁 File Structure

```
components/
  Navbar.jsx
  Dashboard.jsx
context/
  AuthContext.jsx
```

#### 🧠 Problem

Maintain authentication state (`isLoggedIn`) and:

* Show Login/Logout button in Navbar
* Display different UI in Dashboard based on login status

#### 🎯 Objective

* Practice conditional rendering with global state
* Understand real-world usage of context for authentication

---

### 🟡 3. Theme Switcher (Multi Component)

#### 📁 File Structure

```
components/
  Navbar.jsx
  Card.jsx
  Footer.jsx
context/
  ThemeContext.jsx
```

#### 🧠 Problem

Store theme (light/dark) in context and apply styles across multiple components.

#### 🎯 Objective

* Maintain consistent UI using shared state
* Learn centralized state management for UI themes

---

### 🟡 4. Language Switcher

#### 📁 File Structure

```
components/
  Header.jsx
  Content.jsx
context/
  LanguageContext.jsx
```

#### 🧠 Problem

Switch application language (e.g., English / Hindi) and update UI text dynamically.

#### 🎯 Objective

* Handle dynamic UI changes using context
* Work with multiple values in global state

---

### 🔴 5. Cart Count System

#### 📁 File Structure

```
components/
  Navbar.jsx
  Products.jsx
context/
  CartContext.jsx
```

#### 🧠 Problem

Maintain a global cart count:

* Display item count in Navbar
* Update count from Products component

#### 🎯 Objective

* Share and update state across multiple components
* Understand real-world e-commerce pattern

---

## 🧠 Practice Strategy

Follow a step-by-step approach:

1. User Greeting System
2. Auth Status
3. Theme Switcher
4. Language Switcher
5. Cart System

---

## 🏁 Key Takeaways

* Context = Shared global data
* Provider = Supplies data to components
* useContext = Consumes data

✔ Eliminates prop drilling
✔ Keeps components clean and maintainable
✔ Best for shared state across the app

---

## 🚀 Next Step

* Combine `useContext` with `useReducer`
* Build real-world features like:

  * Authentication system
  * Shopping cart
  * Dashboard state management
