import { useState, forwardRef } from 'react'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'

import Icon from 'src/@core/components/icon'


const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const CardInfluencer = (props) => {
  const [show, setShow] = useState(false)


  const speaker = props.speaker;
  return (
    <Card
      onClick={() => {
        setShow(true);
      }}
      sx={{
        height: '100%',
        maxWidth: '235px',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: '0 10',
        cursor: 'pointer'
      }}
    >
      <CardMedia sx={{ height: '14.625rem' }}>
        {speaker.picture ? (
          <img
            src={speaker.picture}
            alt='image'
            style={{
              height: '100%',
              width: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              margin: '0 auto',
              padding: '0 10',
            }}
          />
        ) : (
          <img
            src='/images/avatars/1.png'
            alt='Logo'
            style={{
              height: '100%',
              width: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              margin: '0 auto',
              padding: '0 10',
            }}
          />
        )}
      </CardMedia>
      <CardContent>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {speaker.firstName} {speaker.lastName}
        </Typography>
        <Typography variant='body2'>{speaker.jobTitle} @ {speaker.company} </Typography>
      </CardContent>



      <Dialog
        fullWidth
        open={show}
        scroll='body'
        maxWidth='lg'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        BackdropProps={{ onClick: () => setShow(false) }}
        >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
          <CardMedia sx={{ height: '14.625rem' }}>
        {speaker.picture ? (
          <img
            src={speaker.picture}
            alt='image'
            style={{
              height: '100%',
              width: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              margin: '0 auto',
              padding: '0 10',
            }}
          />
        ) : (
          <img
            src='/images/avatars/1.png'
            alt='Logo'
            style={{
              height: '100%',
              width: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              margin: '0 auto',
              padding: '0 10',
              borderRadius: '25%',
            }}
          />
        )}
      </CardMedia>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              {speaker.firstName} {speaker.lastName}
            </Typography>
            <Typography variant='body2'>
              {speaker.description}
            </Typography>
          </Box>
         
          
        </DialogContent>
      </Dialog>



    </Card>
  );
};

export default CardInfluencer;
