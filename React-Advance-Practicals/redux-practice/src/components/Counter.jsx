import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment } from '../features/counterSlice';

export default function Counter() {
    const counter=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
  return (
   <>
   <h1>{counter}</h1>

   <button onClick={()=>dispatch(increment())}>Increment</button>
   </>
  )
}
