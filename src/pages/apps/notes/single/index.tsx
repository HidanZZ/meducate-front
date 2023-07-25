import { Box } from '@mui/material'
import NoteDetail from 'src/views/pages/notes/detail'
import noteData from 'src/views/pages/notes/notesData'

const SingleNote = () => {
  //randomly select a note from notesData
  const post = noteData[Math.floor(Math.random() * noteData.length)]

  return (
    <Box>
      <NoteDetail post={post}/>
    </Box>
  )
}

export default SingleNote
