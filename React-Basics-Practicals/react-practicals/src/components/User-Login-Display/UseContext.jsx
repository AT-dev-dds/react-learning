import React,{createContext,useState} from 'react'

export const UserContext=createContext();

export  function UserProvider({children}) {

    const [user,setUser]=useState("Guest");

    const login=()=>setUser("Ashutosh");
    const logout=()=>setUser("Guest");
    
  return (
    <>
    <UserContext.Provider value={{user,login,logout}}>
      {children}
    </UserContext.Provider>
    </>
  )
}
