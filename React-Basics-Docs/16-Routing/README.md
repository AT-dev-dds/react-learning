
# 🧭 Navigation & Routing in React

> Build fast, seamless Single Page Applications (SPA) using React Router 🚀

---

## 📌 Overview

React Routing enables navigation between different components **without reloading the page**.

👉 This makes applications:
- ⚡ Fast  
- 🎯 Smooth  
- 🧠 Efficient  

---

## ⚙️ Core Concept

In traditional websites:
- Every navigation reloads the page ❌  

In React:
- Only components change, not the whole page ✅  

👉 This is called **Client-Side Routing**

---

## 📦 Installation

```bash
npm install react-router-dom
````

---

## 🧩 Basic Setup

```jsx id="routing-setup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

---

## 💻 Basic Routing Example

```jsx id="basic-routing-example"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔗 Navigation using Link

```jsx id="link-example"
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>
```

👉 Works like `<a>` but without page reload

---

## 🚀 Programmatic Navigation (useNavigate)

```jsx id="usenavigate-github"
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Contact</h1>

      <button onClick={() => navigate("/")}>
        Go to Home
      </button>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}
```

---

## 🔁 Dynamic Routing

### 📌 Pass Data via URL

```jsx id="dynamic-routing-github"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";

function App() {
  const courses = ["React", "JavaScript", "HTML"];

  return (
    <BrowserRouter>
      <ul>
        {courses.map((course) => (
          <li key={course}>
            <Link to={`/course/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="/course/:courseName" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📥 Access Route Params

```jsx id="useparams-github"
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { courseName } = useParams();
  return <h1>{courseName}</h1>;
}
```

---

## 🚫 404 Page Handling

```jsx id="notfound-github"
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

// Add route
<Route path="*" element={<NotFound />} />
```

👉 Handles all invalid routes

---

## ⚖️ React vs Traditional Routing

| Feature | Traditional | React       |
| ------- | ----------- | ----------- |
| Reload  | Yes         | No          |
| Speed   | Slow        | Fast        |
| Routing | Server-side | Client-side |

---

## 🔑 Key Points

* React uses **client-side routing**
* `BrowserRouter` wraps the app
* `Routes` contains all routes
* `Route` maps path → component
* `Link` enables navigation
* `useNavigate` for dynamic navigation
* `useParams` for dynamic data

---

## 🚀 Best Practices

* Use clean and meaningful paths
* Always handle 404 routes
* Use dynamic routing for scalability
* Keep routing structure organized

---

## 🎯 Use Cases

* Dashboards
* E-commerce apps
* Learning platforms
* Multi-page SPA apps

---

## ⚡ Quick Revision

* Routing = navigation without reload
* React Router handles routing
* Link → navigation
* useNavigate → programmatic navigation
* useParams → dynamic routing

---

## 🧠 Summary

React Routing improves user experience by enabling fast, seamless navigation using component-based rendering instead of full page reloads.

---

## 🔜 Next Topics

* React Js ReactDOM
```
```
