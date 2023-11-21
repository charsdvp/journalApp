// añadimos nuestros proveedores de autenticacion
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { FirebaseAuth } from './config'
// creamos una instancia
const googleProvider = new GoogleAuthProvider()
// esto nos ayuda a que nopermita con que usuario inicia sesion siempre
googleProvider.setCustomParameters({ prompt: 'select_account' })
// crearemos una funcion que nos permitira autenticarnos
export const singInWithGoogle = async () => {
  try {
    // se abre una ventana para seleccionar el usuario en google
    // const result = await signInWithPopup(FirebaseAuth, googleProvider) -> no saldra un error COOP
    const result = await signInWithRedirect(FirebaseAuth, googleProvider)
    // credenciales del usuario autenticado
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const { displayName, email, photoURL, uid } = result.user
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
