import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

import {BrowserRouter, Route, Routes} from 'react-router'
import ProtectedRoute from "./routes/ProtectedRoute"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>

<Route path="/" element={<Login/>}/>

<Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App







// Complete Flow 

// Login Page
//    ↓
// User enters email/password
//    ↓
// onSubmit → API call (/auth/login)
//    ↓
// Get token
//    ↓
// Store token (localStorage)
//    ↓
// Redirect → Dashboard
//    ↓
// ProtectedRoute checks token
//    ↓
// Dashboard loads
//    ↓
// Call /auth/me (with token)
//    ↓
// Show user info
//    ↓
// Call /products (with token)
//    ↓
// Show data