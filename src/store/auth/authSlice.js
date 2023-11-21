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
    // valores si el usuario esta autenticado
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },
    // valores si el usuario no esta autenticado
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload.errorMessage
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
})
// exportamos las funciones o acciones que terminaremos llamando
export const { login, logout, checkingCredentials } = authSlice.actions
