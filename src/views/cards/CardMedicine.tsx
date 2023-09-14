import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { Medicament } from 'src/types/apps/medicament'

// Styled Grid component
const StyledGrid1 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0 !important'
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3, 2.5), // Adjusted padding
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
  height: '10rem', // Adjusted height
  borderRadius: theme.shape.borderRadius
}))

const CardMedicine = ({ medicament }: { medicament: Medicament | null }) => {
  const forme = medicament ? medicament.forme : '';

  // Look up the corresponding image name based on substanceActive
  let imageName = '';

  // Check for specific phrases in substanceActive
  if (!imageName) {
    if (forme.includes('SOLUTION INJECTABLE')) {
      imageName = 'needle.png'; // Image for Solution Injectable
    } else if (forme.includes('SOLUTION') || forme.includes('SUSPENSION') || forme.includes('BUVABLE') || forme.includes('SOL') || forme.includes('SIROP')) {
      imageName = 'syrup.jpg'; // Image for Solution, Suspension, Buvable, Sol, Sirop, etc.
    } else if (forme.includes('COMPRIME')) {
      imageName = 'pills.png'; // Image for Comprime
    } else if (forme.includes('SACHET') || forme.includes('POUDRE')) {
      imageName = 'sachet.png'; // Image for Sachet or Poudre
    } else if (forme.includes('GEL') || forme.includes('POMMADE') || forme.includes('CREME')) {
      imageName = 'pommade.png'; // Image for Gel, Pommade, Creme
    } else if (forme.includes('COLLYRE')) {
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
    <Card sx={{ maxWidth: 500 }}> {/* Adjusted max width */}
      <Grid container spacing={4}> {/* Adjusted spacing */}
        <StyledGrid1 item xs={12} md={6} lg={5}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Img alt={forme} src={`/images/${imageName}`} />
          </CardContent>
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={7}>
          <CardContent>
            {medicament ? (
              <>
                <Typography variant='h6' sx={{ mb: 2 }}>
                  {medicament.nomDuMedicament}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Molecule : {medicament.substanceActive}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Dosage : {medicament.dosage}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Frome : {medicament.forme.toLowerCase()}
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Prix ppv:{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    {medicament.ppv}
                  </Box>
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Prix ph:{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    {medicament.ph}
                  </Box>
                </Typography>
              </>
            ) : (
              <Typography variant='body2'>No medicament selected</Typography>
            )}
          </CardContent>
        </StyledGrid2>
      </Grid>
    </Card>
  );
};
export default CardMedicine;


