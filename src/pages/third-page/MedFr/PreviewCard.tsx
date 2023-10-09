// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'

//import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'
import { MedFr } from 'src/types/apps/medFr'
import { Button } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'

//import Link from 'src/@core/theme/overrides/link'

// ** Types

interface Props {
  medFr: MedFr | null
}

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(1)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const PreviewCard = ({ medFr }: Props) => {

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // ** Hook
  const forme = medFr?.forme_pharmaceutique ? medFr.forme_pharmaceutique.toUpperCase() : '';
  let imageName = '';

  // Look up the corresponding image name based on substanceActive
  console.log('medFr', medFr);

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

  if (medFr) {
    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item sm={16} xs={12} sx={{ mb: { sm: -10, xs: 6 }, mt: { sm: -10, xs: 6 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={176} height={176} src={`/images/${imageName}`} />
                  </CardContent>
                  <Typography
                    variant='h6'
                    sx={{ ml: 10, fontWeight: 600, lineHeight: 'normal', textTransform: 'uppercase' }}
                  >
                    {medFr.denomination}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={10} sx={{ mb: { lg: 0, xs: 4 }, ml: 4 }}>
              <Typography variant='body1' sx={{ mb: 4 }}>
                {medFr.denomination}
              </Typography>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Présentation:
                </Typography>
                <Typography variant='body1'>
                  {medFr.libelle_presentation}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Molecule:
                </Typography>
                <Typography variant='body1'>
                  {medFr.denomination_substance}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Forme pharmaceutique:
                </Typography>
                <Typography variant='body1'>
                  {medFr.forme_pharmaceutique}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Dosage substance:
                </Typography>
                <Typography variant='body1'>
                  {medFr.dosage_substance}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Ref dosage:
                </Typography>
                <Typography variant='body1'>
                  {medFr.ref_dosage}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                  Condition prescription :
                </Typography>
                <Typography variant='body1'>
                  {medFr.condition_prescription}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Statut AMM:
                </Typography>
                <Typography variant='body1'>
                  {medFr.statut_amm}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Type procédure:
                </Typography>
                <Typography variant='body1'>
                  {medFr.type_procedure_amm}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                  Etat commercialisation:
                </Typography>
                <Typography variant='body1'>
                  {medFr.etat_commercialisation}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                  Presentaion Etat commercialisation:
                </Typography>
                {medFr.etat_commercialisation_presentation}
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                  Groupe generique:
                </Typography>
                <Typography variant='body1'>
                  {medFr.libelle_groupe_generique}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                  Voies administration :
                </Typography>
                <Typography variant='body1'>
                  {medFr.voies_administration}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                  Titulaires :
                </Typography>
                <Typography variant='body1'>
                  {medFr.titulaires}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                  Lien de Medicament :
                </Typography>
                <Link href={medFr.lien_avis_ct} target="_blank" rel="noopener noreferrer">
                {medFr.lien_avis_ct}
                </Link>
              </Box>
              {showMore && (
                <div>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                      Valeur ASMR :
                    </Typography>
                    {medFr.valeur_asmr}

                  </Box><Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                      Valeur SMR :
                    </Typography>
                    {medFr.valeur_smr}

                  </Box><Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                      Date declaration commercialisation :
                    </Typography>
                    {medFr.date_avis_ct}

                  </Box><Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                      Date declaration commercialisation :
                    </Typography>
                    {medFr.date_declaration_commercialisation}

                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                      Designation element pharmaceutique:
                    </Typography>
                    {medFr.designation_element_pharmaceutique}
                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                      Motif evaluation:
                    </Typography>
                    <Typography variant='body1'>
                      {medFr.motif_evaluation}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                      Statut AMM:
                    </Typography>
                    <Typography variant='body1'>
                      {medFr.statut_amm}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 4, fontWeight: 600 }}>
                      Date AMM:
                    </Typography>
                    {medFr.date_amm}
                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                      Type procedure AMM:
                    </Typography>
                    <Typography variant='body1'>
                      {medFr.type_procedure_amm}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ mr: 2, fontWeight: 600 }}>
                      Surveillance renforcee:
                    </Typography>
                    <Typography variant='body1'>
                      {medFr.surveillance_renforcee}
                    </Typography>
                  </Box>
                </div>
              )}
              <Button 
              onClick={toggleShowMore} 
              style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
            }}>
                {showMore ? 'Show Less' : 'Show More'}
              </Button>

            </Grid>

          </Grid>
        </CardContent>

        <Divider />

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={7} lg={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Table sx={{ maxWidth: '200px' }}>
                <TableBody>
                  <TableRow>
                    <MUITableCell>
                      <Typography variant='h6'>Date</Typography>
                    </MUITableCell>
                    <MUITableCell>
                    </MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>
                      <Typography variant='body2'>Date debut secu:</Typography>
                    </MUITableCell>
                    <MUITableCell>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        {medFr.date_debut_info_secu}
                      </Typography>
                    </MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>
                      <Typography variant='body2'>Date fin secu:</Typography>
                    </MUITableCell>
                    <MUITableCell>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        {medFr.date_fin_info_secu}
                      </Typography>
                    </MUITableCell>
                  </TableRow>        <TableRow>
                    <MUITableCell>
                      <Typography variant='body2'>Date AMM:</Typography>
                    </MUITableCell>
                    <MUITableCell>
                      <Typography variant='body2' sx={{ fontWeight: 600 }}>
                        {medFr.date_amm}
                      </Typography>
                    </MUITableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} sm={5} lg={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography variant='body2'>TAX:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  {medFr.taux_remboursement}
                </Typography>
              </CalcWrapper>
              <Divider />
              <CalcWrapper>
                <Typography variant='body2'>Prix:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  {medFr.prix_medicament} £
                </Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  } else {
    return null
  }
}

export default PreviewCard;
