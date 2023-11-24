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
    },
    //*  cargar las notas
    setNotes: (state, action) => {

    },
    // * cuando estamos guardando una nota
    setSaving: (state) => {

    },
    // * actualizar nota
    updateNote: (state) => {

    },
    // * eliminar nota
    deleteNoteById: (state, action) => {

    }
  }
})
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions
