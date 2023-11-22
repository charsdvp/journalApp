import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

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
    const result = await singInWithGoogle()
    // console.log(result)
    // si hay un error - seteamos los valores
    if (!result.ok) return dispatch(logout(result.errorMessage))
    // si todo va bien nos logueamos
    dispatch(login(result))
  }
}
// creamos un nuevo thunk que nos servira para registarnos
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    // cambiamos nuestro estado a checking
    dispatch(checkingCredentials())
    // ejecutamos nuestra funcion para registrarnos a firebase
    const resp = await registerUserWithEmailPassword({ email, password, displayName })
    console.log(resp)
  }
}
