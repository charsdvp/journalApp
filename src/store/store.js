import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
// creamos la configuracion de la strore
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})
