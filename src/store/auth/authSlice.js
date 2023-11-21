import { createSlice } from '@reduxjs/toolkit'
// creamos nuestro slice
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'checking', 'not-auuthenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {

    },
    logout: (state, payload) => {

    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
})
// exportamos las funciones o acciones que terminaremos llamando
export const { login, logout, checkingCredentials } = authSlice.actions
