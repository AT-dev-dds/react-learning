import React,{createContext,useReducer} from 'react'

export const Auth=createContext();

const initialState={
    user:null,
    isLoggedIn:false
};

const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,
                user:action.payload,
                isLoggedIn:true
            }
        case "LOGOUT":
           return {...state,
            user:null,
            isLoggedIn:false
           }
        default:
            return state;

    }
}
export default function AuthContext({children}) {

const [state,dispatch]=useReducer(reducer,initialState)


  return (
   <>
   <Auth.Provider value={{state,dispatch}}>
    {children}
   </Auth.Provider>
   </>
  )
}
