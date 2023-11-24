import PropTypes from 'prop-types'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'
// , imageUrls
export const SideBarItem = ({ title, body, id, date }) => {
  const dispatch = useDispatch()
  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title
  }, [title])
  const newBody = useMemo(() => {
    return body.length > 23
      ? body.substring(0, 23) + '...'
      : body
  }, [body])

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date }))
  }
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container direction='column'>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
SideBarItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.any
  // imageUrls: PropTypes.any
}
