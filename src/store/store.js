import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { journalSlice } from './journal'
// creamos la configuracion de la strore
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // agregamos nuestro reducer 2
    journal: journalSlice.reducer
  }
})
