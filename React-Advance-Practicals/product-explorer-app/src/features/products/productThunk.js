import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchProduct, fetchProductById} from './productServices.js'


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