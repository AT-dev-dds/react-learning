import {createAsyncThunk} from '@reduxjs/toolkit'
import {loginUser} from './authService.js'

export const login= createAsyncThunk(
    "auth/login",
    async(data)=>{
     try{
      const res= await loginUser(data,thunkAPI);
      return res;
     }catch(err){
      return thunkAPI.rejectWithValue(
        err.res?.data?.message || "Login Failed"
      )
     }
    }
)