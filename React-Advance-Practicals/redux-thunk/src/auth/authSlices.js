import {login} from './authThunk.js'
import {createSlice} from '@reduxjs/toolkit'


const initialState={
    user:null,
    token:null,
    isLoading:false,
    isError:false,
    message:""
};

 const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
     builder.
     addCase(login.pending,(state)=>{
        state.isLoading=true;
     })
     .addCase(login.fulfilled,(state,action)=>{
 
        state.isLoading=false,
        state.user=action.payload,
        state.token=action.payload.accessToken,
        localStorage.setItem("token",action.payload.accessToken) 
     })
     .addCase(login.rejected,(state,action)=>{
        state.isLoading=false,
        state.isError=true,
        state.message=action.payload
     })
    }
})


export default authSlice.reducer;