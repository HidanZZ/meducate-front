import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import { Box, Grid, Typography } from '@mui/material'

interface WebinarFormProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

const WebinarForm: React.FC<WebinarFormProps> = ({ open, onClose }) => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions(prevQuestions => [...prevQuestions, '']);
  };

  const removeQuestion = index => {
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };
  
  return (
    <Dialog open={open} onClose={() => onClose(false)} fullWidth>
      <DialogTitle>Webinar Confirmation</DialogTitle>
      <DialogContent>
        <form onSubmit={e => e.preventDefault()}>
          <IconButton
            size='small'
            onClick={() => {
              onClose(false);
            }}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
          <p>Are you sure you want to join the webinar?</p>
          <TextField
            fullWidth
            multiline
            minRows={3}
            label='Question'
            placeholder='Question...'
            sx={{
              '& .MuiOutlinedInput-root': { alignItems: 'baseline' },
              mt: 4,
              mb: 2
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:message-outline' />
                </InputAdornment>
              )
            }}
          />
  
          {questions.map((question, index) => (
            <Grid container key={index} spacing={0} sx={{ width: '100%' }}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='subtitle2' sx={{ flex: '1 0 auto' }}>
                    Question
                  </Typography>
                  
                  <IconButton size='small' onClick={() => removeQuestion(index)}>
                    <Icon icon='mdi:trash' />
                  </IconButton>
                  
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  placeholder='Question...'
                  sx={{
                    '& .MuiOutlinedInput-root': { alignItems: 'baseline' },
                    mb: 2
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Icon icon='mdi:message-outline' />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
          <Button variant='contained' onClick={addQuestion}>
            Add Question
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}  

export default WebinarForm;
