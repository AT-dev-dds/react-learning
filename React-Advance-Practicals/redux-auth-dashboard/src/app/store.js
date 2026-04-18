import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../auth/authSlices.js'

export const store=configureStore({
    reducer:{
        auth:userReducer
    }
})