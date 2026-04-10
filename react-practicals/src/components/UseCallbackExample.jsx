import React,{useCallback,useState} from 'react'

const Child=React.memo(function Child({onClick}){
   return <button onClick={onClick}>Click me!</button>
})

export default function UseCallbackExample() {

    const[count,setCount]=useState(0);

    const handleClick=useCallback(()=>{
        console.log("Button Clicked");
    },[])
  return (
  <>
  <h1>Count:{count}</h1>

  <button onClick={()=>setCount(count+1)}>++</button>

  <Child onClick={handleClick}/>
  </>
  )
}
