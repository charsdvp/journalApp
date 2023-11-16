import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { NavBar } from '../components'

const drawerWith = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWith={drawerWith}/>

      {/* SideBar */}
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        { children }
      </Box>
    </Box>
  )
}
JournalLayout.propTypes = {
  children: PropTypes.any
}
