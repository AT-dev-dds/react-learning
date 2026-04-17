import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement, increaseByAmount } from '../features/counterSlice';

export default function Counter() {
    const counter=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
  return (
   <>
   <h1>{counter}</h1>

   <button onClick={()=>dispatch(increment())}>Increment</button>

   <button onClick={()=>dispatch(decrement())}>Decrement</button>

   <button onClick={()=>dispatch(increaseByAmount(500))}>increment by amount</button>
   </>
  )
}
