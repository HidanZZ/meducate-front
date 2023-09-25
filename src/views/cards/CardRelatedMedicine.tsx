// CardRelatedMedicine.tsx
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Medicament } from 'src/types/apps/medicament';
import { Button, Grid, GridProps, Grow, styled } from '@mui/material';

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

interface CardRelatedMedicineProps {
  similarMedicaments: Array<Medicament> | null;
}

// Define the mapping for ima

const CardRelatedMedicine: React.FC<CardRelatedMedicineProps> = ({ similarMedicaments }) => {

  // const [visibleCards, setVisibleCards] = useState(3); // Number of cards to initially display

  const [showMore, setShowMore] = React.useState(false);
  const maxMedicamentsToShow = 6;
  useEffect(() => {
    console.log('similarMedicaments', similarMedicaments);
  }, [similarMedicaments]);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {similarMedicaments ? (
        similarMedicaments
          .slice(0, showMore ? undefined : maxMedicamentsToShow)
          .map((medicament, index) => {
            // Look up the corresponding image name based on forme
            const forme = medicament.forme ? medicament.forme.toUpperCase() : '';
            let imageName = '';

            // Check for specific phrases in forme
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
              } else if (forme.includes('COLLYRE') || forme.includes('COLLYRE EN SOLUTION')) {
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
            <Grow in={true} key={index}> 
              <Grid item xs={2} sm={4} md={4} key={index}>
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
              </Grid>
              </Grow>
            );
          })
      ) : (
        <Typography variant='body2'>No related medicaments</Typography>
      )}
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
      </Grid>
    </Grid>
  );

};

export default CardRelatedMedicine;
