// asignamos unalias para que no haya conflicto con <Link> de @mui/material
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
// creamos algunos valores iniciales para el formulario
const formData = {
  email: '',
  password: '',
  displayName: ''
}
// creamos un objeto personalizado para nuestras validaciones
const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}
export const RegisterPage = () => {
  const dispatch = useDispatch()
  // cremamos un estado que nos ayduara a que nos salgan las advertencias del formulario la primera vez que entramos a RegisterPage
  const [formSubmitted, setFormSubmmited] = useState(false)
  // aqui accedemos a nuestro estado de store
  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])
  // desestructuramos los valores que requerimos de nuestro customHook - pasamos como segundo argumento nuesto objeto con las validaciones
  const { email, password, displayName, formState, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations)
  // console.log({ isFormValid, displayNameValid, emailValid, passwordValid })
  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmmited(true)
    if (!isFormValid) return
    // disparamos nuestro thunk con nuestro formState
    dispatch(startCreatingUserWithEmailPassword(formState))
  }
  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <h1>{isFormValid ? 'Form Valid' : 'Form Invalid'}</h1>
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
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
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
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
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
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6} display={ !!errorMessage ? '' : 'none' }>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                disabled={ isCheckingAuthentication }
                type='submit' variant="contained" fullWidth>
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
