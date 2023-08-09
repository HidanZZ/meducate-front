 // ** MUI Imports
 import Box from '@mui/material/Box'
 import Card from '@mui/material/Card'
 import { styled } from '@mui/material/styles'
 import Typography from '@mui/material/Typography'
 import CardContent from '@mui/material/CardContent'
 import Grid, { GridProps } from '@mui/material/Grid'

 // Styled Grid component
 const StyledGrid1 = styled(Grid)<GridProps>(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   [theme.breakpoints.down('md')]: {
     paddingTop: '0 !important'
   },
   '& .MuiCardContent-root': {
     padding: theme.spacing(3, 4.75),
     [theme.breakpoints.down('md')]: {
       paddingTop: 0
     }
   }
 }))

 // Styled Grid component
 const StyledGrid2 = styled(Grid)<GridProps>(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   [theme.breakpoints.up('md')]: {
     paddingLeft: '0 !important'
   },
   [theme.breakpoints.down('md')]: {
     order: -1
   }
 }))

 // Styled component for the image
 const Img = styled('img')(({ theme }) => ({
   height: '11rem',
   borderRadius: theme.shape.borderRadius
 }))
 const CardMedicine = ()  => {
   return (
     <Card>
       <Grid container spacing={6}> 
         <StyledGrid1 item xs={12} md={6} lg={5}>
           <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Img alt='Stumptown Roasters' src='/images/pills.png' />
           </CardContent>
         </StyledGrid1>
         <StyledGrid2 item xs={12} md={6} lg={7}>
           <CardContent>          
             <Typography variant='h6'>ACEPRIL</Typography>
             <Typography variant='body2'>
           Although cards can support multiple actions, UI controls, and an overflow menu.
         </Typography>
         <Typography sx={{ fontWeight: 500, mb: 3 }}>
             Price:{' '}
             <Box component='span' sx={{ fontWeight: 'bold' }}>
                 $899
             </Box>
         </Typography>
             {/* <Typography variant='body2'>{description}</Typography> */}
             { /*<Typography variant='body2'>Price: {price}</Typography> */}
          
           </CardContent>
         </StyledGrid2>
       </Grid>
     </Card>
   )
 }

 export default CardMedicine;