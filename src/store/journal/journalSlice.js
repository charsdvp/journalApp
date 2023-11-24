import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  // necesitamos saber si estoy guardando mi post
  initialState: {
    isSaving: true,
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
    // * agregar una nota
    addNewEmptyNote: (state, action) => {

    },
    // * establecemos cual es la nota activa
    setActiveNote: (state, action) => {

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
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions
