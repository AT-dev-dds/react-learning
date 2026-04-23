import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../auth/authSlices.js'

export const store=configureStore({
   reducer:{
     auth: authReducer
   }
})