import {createAsyncThunk} from '@reduxjs/toolkit'
import {loginUser} from './authService.js'

export const login= createAsyncThunk(
    "auth/login",
    async(data,thunkAPI)=>{
     try{
      
      const res= await loginUser(data,thunkAPI);
     

      return res;
     }catch(err){


      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login Failed"
      )
     }
    }
)