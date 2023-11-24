import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from './journalSlice'
import { loadNotes } from '../../helpers'

// inicia el proceso de crear una nueva nota
export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())
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
    // const setDocResp = await setDoc(newDoc, newNote)
    await setDoc(newDoc, newNote)
    // console.log({ newDoc, setDocResp })
    // le creamos la propiedad id a la nota
    newNote.id = newDoc.id
    // pasamos el payload
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
    // dispatch
    // dispatch(newNote)
    // dispatch(activarNote)
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    // desestructuramos nuestro id
    const { uid } = getState().auth
    // pasamos el uid del usuario
    const notes = await loadNotes(uid)
    // actualizamos nuestro estado
    dispatch(setNotes(notes))
  }
}