import { collection, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const loadNotes = async (uid = '') => {
  // hacemos la conexion mediante el path
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collectionRef)

  const notes = []
  // recorremos cada documento
  docs.forEach(doc => {
    // agregamos a las notas la data
    notes.push({ id: doc.id, ...doc.data() })
  })
  return notes
}
