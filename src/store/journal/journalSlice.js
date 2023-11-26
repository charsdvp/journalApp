import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  // necesitamos saber si estoy guardando mi post
  initialState: {
    isSaving: false,
    messageSave: '',
    notes: [],
    active: null
    // active: {
    // id: 'ascccasd',
    // title: '',
    // body: '',
    // date: '',
    // imageUrls: []
    // }
  },
  reducers: {
    // creamos nuestras acciones - siempre debe de ser trabajo asincrono
    // guardando la notaaa
    savingNewNote: (state) => {
      state.isSaving = true
    },
    // * agregar una nota
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    // * establecemos cual es la nota activa
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSave = ''
    },
    //*  cargar las notas
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    // * cuando estamos guardando una nota
    setSaving: (state) => {
      state.isSaving = true
      state.messageSave = ''
    },
    // * actualizar nota
    updateNote: (state, action) => {
      // actualizamos la referencia local
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      // actualziamos nuestro mensjae
      state.messageSave = `${action.payload.title}, actualizada correctamente`
    },
    // fotos de la nota activa
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = state.active.imageUrls || []
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
      state.isSaving = false
    },
    // limpiar store journal
    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSave = ''
      state.notes = []
      state.active = null
    },
    // * eliminar nota
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload)
      state.active = null
    }
  }
})
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote, setPhotosToActiveNote, clearNotesLogout } = journalSlice.actions
