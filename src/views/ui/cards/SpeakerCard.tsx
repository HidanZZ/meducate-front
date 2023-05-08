// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const CardInfluencer = (props) => {
  const speaker = props.speaker
  return (
    <Card sx={{ height: '100%', maxWidth: '240px', position: 'relative', alignItems : 'center', justifyContent : 'center', margin : '0 auto', padding : '0 10' }}>
      <CardMedia sx={{ height: '14.625rem' }}>
      {speaker.picture ? (
          <img 
            src={speaker.picture} 
            alt='image'
            style={{ height: '100%', width: 'auto', alignItems : 'center', justifyContent : 'center', display : 'flex', margin : '0 auto', padding : '0 10'}} 
          />
        ) : (
          <img 
            src='/images/avatars/1.png'
            alt='Logo'
            style={{ height: '100%', width: 'auto', alignItems : 'center', justifyContent : 'center', display : 'flex', margin : '0 auto', padding : '0 10'}} 
          />
        )}
      </CardMedia>      
      <CardContent>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {speaker.firstName} {speaker.lastName}
        </Typography>
        <Typography variant='body2'>
          {speaker.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardInfluencer
