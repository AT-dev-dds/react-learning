import Login from "./pages/Login"


function App() {


  return (
    <>
     <Login/>
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