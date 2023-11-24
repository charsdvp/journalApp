import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth/authSlice'
import { startLoadingNotes } from '../store/journal/thunks'

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    // cuando el estado de la aplicacion cambia
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // si no tengo un usuario activo se dispara logout
      if (!user) return dispatch(logout())
      // si tengo un usuario activo
      const { uid, displayName, name, photoURL } = user
      dispatch(login({ uid, displayName, name, photoURL }))
      // iniciamos la carga de nuestras notes
      dispatch(startLoadingNotes())
    })
  }, [])
  return { status }
}
