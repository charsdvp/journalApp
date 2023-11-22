import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])
  // aqui analizaremos si cumple con la condicion para que el formulario sea valido
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false
    }
    return true
  }, [formValidation])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formCheckedValues = {}
    // recorremos el objeto formValidations
    for (const formField of Object.keys(formValidations)) {
      // aqui ya accedemos a la funcion y error de mensaje de cada uno de los fields()
      const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]
      // creamos una propiedad computada que sera igual al resultado de ejecutar la funcion de cada field
      // pasaremos como parametro la propiedad de nuestro formstate accediendo a ella con nuestro formField ya que tenemos los mismos nombres
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
    }
    setFormValidation(formCheckedValues)
    console.log(formCheckedValues)
  }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid
  }
}
