// añadimos nuestros proveedores de autenticacion
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'
// creamos una instancia de nuestro proveedor
const googleProvider = new GoogleAuthProvider()
// esto nos ayuda a que nos permita con que usuario inicia sesion siempre
googleProvider.setCustomParameters({ prompt: 'select_account' })
// crearemos una funcion que nos permitira autenticarnos
export const singInWithGoogle = async () => {
  try {
    // se abre una ventana para seleccionar el usuario en google
    const result = await signInWithPopup(FirebaseAuth, googleProvider) // -> no saldra un error COOP
    // const result = await signInWithRedirect(FirebaseAuth, googleProvider)
    // credenciales del usuario autenticado
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const { displayName, email, photoURL, uid } = result.user
    // console.log(result.user)
    // regresamos las datos del user
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}
// * se exportara al thunk.js

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    // hacemos la coneccion con Firebase
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL } = resp.user
    // Aquí sabemos el usuario actual
    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}
export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    // aqui hacemos la conexion a firebase
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    // de la respuesta solo nos interesa lo siguiente
    const { uid, photoURL, displayName } = resp.user
    // retornamos la data
    return {
      ok: true,
      uid,
      photoURL,
      displayName
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}
