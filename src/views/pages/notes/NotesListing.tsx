import { Grid } from '@mui/material'
import notesPost from './notesData'
import NoteCard from './NoteCard'

const NotesListing = () => {
  const blogPosts = notesPost.sort(() => Math.random() - Math.random()).slice(0, 10)

  return (
    <Grid container spacing={3} display={'flex'}>
      {blogPosts.map(post => {
        return <NoteCard post={post} key={post.id} />
      })}
    </Grid>
  )
}

export default NotesListing
