import PropTypes from 'prop-types'
import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components'

const drawerWith = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWith={drawerWith} />

      <SideBar drawerWith={drawerWith} />
      <Box component='main' sx={{ flexGrow: 1, pt: 3, pl: 3, pr: 2, pb: 2 }}>
        <Toolbar />
        { children }
      </Box>
    </Box>
  )
}
JournalLayout.propTypes = {
  children: PropTypes.any
}
