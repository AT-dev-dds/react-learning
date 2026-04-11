import React,{createContext,useState,useEffect} from 'react'


export const UserContext=createContext();

export function UserGreetings({children}){
    const [names,setName]=useState("");

    useEffect(() => {
        setName("Ashutosh");
    }, []);

    return (
   <>
        <UserContext.Provider value={names}>
            {children}
        </UserContext.Provider>
   </>
    )
}