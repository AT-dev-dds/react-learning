import {createAsyncThunk} from '@reduxjs/toolkit'
import {addProduct, fetchProduct, fetchProductById, updateProduct} from './productServices.js'


export const getProducts= createAsyncThunk(
    "products/fetchAll",

    async(_,thunkAPI)=>{
     
        try{

            const res= await fetchProduct();
            return res;

        }catch(err){
        
           return thunkAPI.rejectWithValue("failed to fetch products!");
        }
    }
)


export const getProductsById=createAsyncThunk(
    "products/fetchById",
    async(id,thunkAPI)=>{
     try{
        console.log("Id Received.."+id);
       const res= await fetchProductById(id);
       return res.data;
     }catch(err){
      
        console.log(err);
        return thunkAPI.rejectWithValue("Failed to fetch products by Id!");
     }
    }
)


export const addItem=createAsyncThunk(
    "products/add",
    async(data,thunkAPI)=>{
       
    try{
        const res=await addProduct(data);
        return res;
    }catch(err){
    console.log(err);
    console.log(err.response);

    thunkAPI.rejectWithValue("Failed to add Item!");
    }
    }
)





export const  updateItem=createAsyncThunk(
    "products/update",
    async(data,thunkAPI)=>{
       try{
        const res= await updateProduct(data);
        return res.data;
       }catch(err){
      console.log(err.message);
      thunkAPI.rejectWithValue("Failed to update product");
       }
    }
)