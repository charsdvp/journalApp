// asignamos unalias para que no haya conflicto con <Link> de @mui/material
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
// creamos algunos valores iniciales para el formulario
const formData = {
  email: 'carlos@gmail.com',
  password: '123456',
  displayName: 'Carlos Sánchez'
}
export const RegisterPage = () => {
  // desestructuramos los valores que requerimos de nuestro customHook
  const { email, password, displayName, formState, onInputChange } = useForm(formData)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }
  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Carlos Sánchez"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button type='submit' variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
