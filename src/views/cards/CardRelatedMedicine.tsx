// CardRelatedMedicine.tsx
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Medicament } from 'src/types/apps/medicament';
import { Grid } from '@mui/material';

interface CardRelatedMedicineProps {
  similarMedicaments: Array<Medicament> | null;
}

const CardRelatedMedicine: React.FC<CardRelatedMedicineProps> = ({ similarMedicaments }) => {
  useEffect(() => {
    console.log('similarMedicaments', similarMedicaments);
  }, [similarMedicaments]);
  
return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {similarMedicaments ? (
        similarMedicaments.map((medicament, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card key={index} sx={{ mb: 3 }} >
              <CardContent>
                <Typography variant='h6' sx={{ mb: 2 }}>
                  {medicament.nomDuMedicament}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Molecule: {medicament.substanceActive}
                </Typography>
                {/* Display other information about the related medicament */}
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Dosage: {medicament.dosage}
                </Typography>
                <Typography variant='body2' sx={{ mb: 2 }}>
                  Forme: {medicament.forme.toLowerCase()}
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
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant='body2'>No related medicaments</Typography>
      )
      }
    </Grid>
  );
};

export default CardRelatedMedicine;
