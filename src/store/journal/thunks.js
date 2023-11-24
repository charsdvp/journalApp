import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'

// inicia el proceso de crear una nueva nota
export const startNewNote = () => {
  return async (dispatch, getState) => {
    // console.log(getState()) // trae de vuelta todo lo que tengamos en nuestra store
    // queremos el uid de authentication
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    // creamos la referencia al documento de firebase
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    // agrega la nota a firebase
    const setDocResp = await setDoc(newDoc, newNote)
    console.log({ newDoc, setDocResp })
    // dispatch
    // dispatch(newNote)
    // dispatch(activarNote)
  }
}
