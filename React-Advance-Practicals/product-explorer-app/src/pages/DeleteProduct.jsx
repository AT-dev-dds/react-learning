import React, { useEffect } from 'react'
import {deleteItem} from '../features/products/productThunk'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router';

export default function DeleteProduct() {

    const {id}=useParams();

    const dispatch=useDispatch();

    const navigate= useNavigate();

    useEffect(()=>{
        dispatch(deleteItem(id));
        navigate("/");
    },[])
  return (
   <>
   
   </>
  )
}
