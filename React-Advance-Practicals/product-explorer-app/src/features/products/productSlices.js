import {createSlice} from '@reduxjs/toolkit'
import { addItem, deleteItem, getProducts, updateItem } from './productThunk'
import {getProductsById} from './productThunk'



const initialState={
    products:[],
    singleProduct:null,
    isLoading:false,
    isError:false,
    messages:""
 
}
  
    const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
        resetState:(state)=>{
            state.isLoading=false;
            state.isError=false;
            state.message=""
        }
    },

    extraReducers:(builder)=>{
        
        builder
        .addCase(getProducts.pending,(state)=>{
            state.isLoading=true;
             state.messages=""
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
              state.isLoading=false;
            state.products=action.payload;
            state.messages="Products fetched Successfully!"
        })
        .addCase(getProducts.rejected,(state)=>{
            state.isLoading=false,
            state.isError=true;
            state.messages=action.payload ||"Something went wrong!"
        })
        .addCase(getProductsById.pending,(state)=>{
            state.isLoading=true;
             state.messages=""
        })
        .addCase(getProductsById.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.singleProduct=action.payload;
            state.messages="Products fetched by Id Successfully!"

        })
        .addCase(getProductsById.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
             state.messages=action.payload ||"Something went wrong!"
        })
        .addCase(addItem.pending,(state)=>{
            state.isLoading=true;
             state.messages=""
        })
        .addCase(addItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products.push(action.payload);
            state.messages="Product added Successfully!"
        })
        .addCase(addItem.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
            state.messages=action.payload ||"Something went wrong!"
        })
        .addCase(updateItem.pending,(state)=>{
            state.isLoading=true;
             state.messages=""
        })
        .addCase(updateItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=  state.products.map((product)=>{

               return product.id === action.payload.id ? action.payload:product
            });
            state.messages="Product updated successfully!"
        })
        .addCase(updateItem.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
            state.messages=action.payload ||"Something went wrong!"
        })
        .addCase(deleteItem.pending,(state)=>{
            state.isLoading=true;
            state.messages=""
        })
        .addCase(deleteItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            const deleteId=Number(action.meta.arg);
            
            state.products= state.products.filter((product)=>product.id!==deleteId);
            state.messages="Product deleted successfully!"


        })
        .addCase(deleteItem.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
            state.messages=action.payload ||"Something went wrong!"
        })
    }
    })


    export default productSlice.reducer;
    export const {resetState}=productSlice.actions;
