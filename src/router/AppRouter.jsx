import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth/authSlice'

export const AppRouter = () => {
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
    })
  }, [])
  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <>
      <Routes>
        {
          status === 'authenticated'
            ? <Route path='/*' element={<JournalRoutes />} />
            : <Route path='/auth/*' element={<AuthRoutes />} />
        }
        <Route path='/*' element={<Navigate to='/auth/login' />} />
        {/* Login y Registro */}
        {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}
        {/* Journal App */}
        {/* <Route path='/*' element={<JournalRoutes />} /> */}
      </Routes>
    </>
  )
}
