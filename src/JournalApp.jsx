import { Route, Routes } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const JournalApp = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<AppRouter />}/>
      </Routes>
    </>
  )
}
