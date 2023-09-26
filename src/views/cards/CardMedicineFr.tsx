import { MedFr } from 'src/types/apps/medFr'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import router from 'next/router'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

interface CardMedicineFrProps {
  medFr: MedFr | null;
}

const CardMedicineFr: React.FC<CardMedicineFrProps> = ({ medFr }) => {
  // ** State

  const handleClick = () => {
    router.push('/third-page/MedFr/'+ medFr?._id);
  }


  const forme = medFr?.forme_pharmaceutique ? medFr.forme_pharmaceutique.toUpperCase() : '';
  let imageName = '';

  // Look up the corresponding image name based on substanceActive

  // Check for specific phrases in substanceActive
  if (!imageName) {
    if (forme.includes('SOLUTION INJECTABLE') || forme.includes('INJECTABLE')) {
      imageName = 'needle.png'; // Image for Solution Injectable
    } else if (forme.includes('SOLUTION') || forme.includes('SUSPENSION') || forme.includes('BUVABLE') || forme.includes('SOL') || forme.includes('SIROP')) {
      imageName = 'syrup.png'; // Image for Solution, Suspension, Buvable, Sol, Sirop, etc.
    } else if (forme.includes('COMPRIME')) {
      imageName = 'pills.png'; // Image for Comprime
    } else if (forme.includes('SACHET') || forme.includes('POUDRE')) {
      imageName = 'sachet.png'; // Image for Sachet or Poudre
    } else if (forme.includes('GEL') || forme.includes('POMMADE') || forme.includes('CREME')) {
      imageName = 'pommade.png'; // Image for Gel, Pommade, Creme
    } else if (forme.includes('COLLYRE')) {
      imageName = 'collyre.png'; // Image for Collyre
    } else if (forme.includes('COLLYRE EN SOLUTION')) {
      imageName = 'collyre.png'; // Image for Collyre
    } else if (forme.includes('SUPPOSITOIRE')) {
      imageName = 'suppositoire.png'; // Image for Suppositoire
    } else if (forme.includes('POCHE')) {
      imageName = 'poche.png'; // Image for Poche
    } else {
      // Default to a generic image if no match is found
      imageName = 'pills.png';
    }
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width={137} height={176} alt='Apple iPhone 11 Pro' src={`/images/${imageName}`} />
            </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            pt: ['0 !important', '0 !important', '1.5rem !important'],
            pl: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            {medFr ? (
              <>
                <Typography variant='h6' sx={{ mb: 2 }}>
                  {medFr.denomination}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  {medFr.libelle_presentation}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Frome : {medFr.forme_pharmaceutique.toLowerCase()}
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Prix :{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    {medFr.prix_medicament}
                  </Box>
                </Typography>
              </>
            ) : (
              <Typography variant='body2'>Ce medicament n'est pas disponible aux France</Typography>
            )}
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button sx={{ '& svg': { mr: 2 } }} onClick={handleClick}>
                <Icon icon='mdi:plus' fontSize={20} />
                Show details
              </Button>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMedicineFr;
