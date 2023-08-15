// ** React Imports
// import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
const CardRelatedMedicine = () => {
  // ** State
  // const [collapse, setCollapse] = useState<boolean>(false)

  // const handleClick = () => {
  //   setCollapse(!collapse)
  // }

  return (
    <Card>
          <CardContent>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Pills
        </Typography>
        <Typography variant='body2'>
          Although cards can support multiple actions, UI controls, and an overflow menu.
        </Typography>
        <Typography sx={{ fontWeight: 500, mb: 3 }}>
            Price:{' '}
            <Box component='span' sx={{ fontWeight: 'bold' }}>
                $899
            </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardRelatedMedicine;
