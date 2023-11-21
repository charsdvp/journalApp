import { useDispatch } from 'react-redux'
// asignamos un alias para que no haya conflicto con <Link> de @mui/material
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {
  const dispatch = useDispatch()
  // usamos nuestro customHook con un estado inicial
  const { email, password, onInputChange } = useForm({
    email: 'carlos@gmail.com',
    password: '123456'
  })
  // creamos una funcion para enviar el formulario
  const onSubmit = (event) => {
    event.preventDefault()
    // console.log({ email, password })
    // disparamos la accion para cambiar el estado de nuestra app a checking
    dispatch(checkingAuthentication())
  }
  const onGoogleSignIn = () => {
    // console.log('Google Sign In')
    dispatch(startGoogleSignIn())
  }
  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name='email'
                onChange={onInputChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name='password'
                onChange={onInputChange}
                value={password}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button type='submit' variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
