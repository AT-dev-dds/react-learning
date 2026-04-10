import React,{useState,useMemo} from 'react'

export default function ExpensiveCalculation() {

    const [count,setCount]=useState(0);
    const [text,setText]=useState("");

    const expensiveCalculation=useMemo(()=>{return count*2},[count]);
  return (
    <>
    <h1>Count :{count}</h1>
    <h3>Expensive Calculation: {expensiveCalculation}</h3>
    <input type="text" placeholder='Type Something....' value={text} 
    onChange={(e)=>setText(e.target.value)} />;
    <button onClick={()=>setCount(count+1)}>++</button>
    </>
  )
}
