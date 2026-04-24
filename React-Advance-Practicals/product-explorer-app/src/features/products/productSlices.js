import {createSlice} from '@reduxjs/toolkit'
import { addItem, deleteItem, getProducts, updateItem } from './productThunk'
import {getProductsById} from './productThunk'



const initialState={
    products:[],
    singleProduct:null,
    isLoading:false,
    isError:false,
 
}
  
    const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        
        builder
        .addCase(getProducts.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
              state.isLoading=false;
            state.products=action.payload;
        })
        .addCase(getProducts.rejected,(state)=>{
            state.isLoading=false,
            state,isError=true;
        })
        .addCase(getProductsById.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getProductsById.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.singleProduct=action.payload;

        })
        .addCase(getProductsById.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true
        })
        .addCase(addItem.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products.push(action.payload);
        })
        .addCase(addItem.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
        .addCase(updateItem.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(updateItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=  state.products.map((product)=>{

               return product.id === action.payload.id ? action.payload:product
            })
        })
        .addCase(updateItem.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
        .addCase(deleteItem.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteItem.fulfilled,(state,action)=>{
            state.isLoading=false;

            state.products= state.products.filter((product)=>product.id!==action.payload.id);
        })
        .addCase(deleteItem.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
    }
    })


    export default productSlice.reducer;
