import React,{useReducer} from 'react'

const initialState={
    isDark:false
};
 const reducer=(state,action)=>{
        switch(action.type){
            case "TOGGLE_THEME":
                return {...state,isDark:!state.isDark};
                default:
                    return state;
        }
    }


export default function ToggleMode() {

   const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <>
    <div
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px"
      }}
    ></div>

    <h1>{state.isDark?"Dark Mode":"Light Mode"}</h1>

    <button className='btn btn-primary' onClick={()=>{dispatch({type:"TOGGLE_THEME"})}}>Toggle Theme</button>


    </>
  )
}
