import { Box } from '@mui/material'
import NotesListing from 'src/views/pages/notes/NotesListing'
import SearchBar from 'src/views/pages/notes/searchBar'

const Notes = () => {
 

  return (
    <Box>
      <SearchBar />
      <NotesListing />
    </Box>
  )
}

export default Notes
