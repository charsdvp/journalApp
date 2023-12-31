import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers'
import { clearNotesLogout } from '../journal/journalSlice'
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
// * creamos un nuevo thunk que nos servira para registarnos
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    // cambiamos nuestro estado a checking
    dispatch(checkingCredentials())
    // ejecutamos nuestra funcion para registrarnos a firebase
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })
    if (!ok) return dispatch(logout({ errorMessage }))
    // logueamos el usuario si no hay ningun error
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

// * para loguearnos recibiremos un email y un password
export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    // cambiamos nuestro estado a checking
    dispatch(checkingCredentials())
    // aqui ejecutamos nuestro provider con nuestra contraseña y el email
    const result = await loginWithEmailPassword({ email, password })
    // si hub algun error se dispara logout
    if (!result.ok) return dispatch(logout(result))
    // si no disparamos login con toda nuestra data
    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    // TODO: tal vez sea mejor signOut
    await logoutFirebase()
    // disparamaos la accion para limpiar las notas
    dispatch(clearNotesLogout())
    dispatch(logout({ errorMessage: null }))
  }
}
