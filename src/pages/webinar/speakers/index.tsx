// ** MUI Imports
import Grid from '@mui/material/Grid'
import SpeakerCard from 'src/views/ui/cards/SpeakerCard'
import Link from 'next/link'

const Speakers = () => {

  const speakers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      description: 'John Doe is a software engineer with 10 years of experience in web development.',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      description: 'Jane Doe is a UX designer with 5 years of experience in user research and interface design.',
    },
    {
      id: 3,
      firstName: 'Robert',
      lastName: 'Smith',

      description: 'Robert Smith is a data scientist with 8 years of experience in machine learning and statistical analysis.',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Jones',
      description: 'Emily Jones is a marketing strategist  mily Jones is a marketing strategistmily Jones is a marketing strategist with 6 years of experience in digital marketing and branding.',
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Lee',
      description: 'David Lee is a product manager with 9 years of experience in product development and innovation.',
    },
  ];


  return (
    <Grid container spacing={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyItems: 'center'}}>
      {speakers.map((speaker) => (
        <Grid key={speaker.id} item xs={12} sm={6} md={4} lg={3} sx={{ justifyContent:'center', maxWidth: '240px', flex: '1 0 auto' }}>
          <SpeakerCard speaker={speaker} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Speakers
