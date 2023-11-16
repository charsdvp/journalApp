import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis eligendi quas necessitatibus ipsam similique molestias ex temporibus dignissimos dolores? Accusantium voluptatibus ea quae aspernatur est odio reprehenderit quaerat vero?</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
