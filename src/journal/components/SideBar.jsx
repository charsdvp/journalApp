import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'
export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer variant='permanent' // temporary
        open
        sx={{ display: { xs: 'block' }, '& .MuiDrawe-paper': { boxSizing: 'border-box', width: drawerWidth } }} >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Carlos Sánchez
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container direction='column'>
                    <ListItemText primary={text} />
                    <ListItemText secondary='asdasd asdsadasd asdas' />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number
}
