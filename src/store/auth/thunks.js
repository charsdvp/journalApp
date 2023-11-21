import { checkingCredentials } from './authSlice'

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    // disparamos la accion y cambiamos el estado de 'not-authentication' a 'checking'
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    // disparamos la accion y cambiamos el estado de 'not-authentication' a 'checking'
    dispatch(checkingCredentials())
  }
}
