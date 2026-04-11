import React,{useReducer} from 'react'

 

export default function UseReducerCounter() {
     const initialState = { count: 0 };
     const [state,dispatch]=useReducer(reducer,initialState);
  

    const handleIncrement=()=>{
        dispatch({type:"increment"})
    };

    const handleDecrement=()=>{
        dispatch({type:"decrement"})
    };

   function reducer(state,action){
        switch(action.type){
            case "increment":
                return {...state,count:state.count+1};
            case "decrement":
                return {...state,count:state.count-1};
             default:
                return state

        }

    }
  return (
    <>
    <h1> You clicked {state.count} times</h1>
    <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}
