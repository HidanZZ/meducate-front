// ** MUI Imports
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'

import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import AutocompleteComponent from "src/views/pages/medicaments/AutoComplete";
import CardRelatedMedicine from 'src/views/cards/CardRelatedMedicine';
import CardMedicine from 'src/views/cards/CardMedicine';
import { Medicament } from "src/types/apps/medicament";
import { useEffect } from "react";
import { getSimilarByDenomination } from "src/store/apps/medicament/components/getSimilarMedicamentsByDenomination";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { getMedicamentById, reset } from "src/store/apps/medicament/components/getMedicamentById";
import { useRouter } from "next/router";
import CardMedicineFr from "src/views/cards/CardMedicineFr";
import { MedFr } from "src/types/apps/medFr";
import { getByDenomination } from "src/store/apps/medFr/components/getMedicamentByDenomination";


const SearchResult = () => {


  const dispatch = useDispatch<AppDispatch>();

  const { id } = useRouter().query;

  const { medicament }: { medicament: Medicament | null } = useSelector((state: any) => state.medicament.getMedicamentById);

  const { medicaments }: { medicaments: Array<Medicament> } = useSelector((state: any) => state.medicament.getSimilarByDenomination);
  
  const { medFr }: { medFr: MedFr | null} = useSelector((state: any) => state.medicament.getByDenomination);


  useEffect(() => {
    if (id) {
      dispatch(getMedicamentById(id as string));
    }

    // Clean up on unmount or when id changes
    return () => {
      dispatch(reset());
    };
  }, [id]);


  useEffect(() => {
    if (medicament) {
      // Now you can use the fetched medicament's details
      dispatch(getSimilarByDenomination(medicament.nomDuMedicament));
      dispatch(getByDenomination(medicament.nomDuMedicament));
      console.log(medFr);
    }
  }, [medicament, medFr]);

 
  useEffect(() => {
    // Log the fetched MedFr data
    console.log("MedFr:", medFr);
  }, [medFr]);


  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AutocompleteComponent hidden={false} />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <Typography variant='h5'>Médicament</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMedicine medicament={medicament} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMedicineFr medFr={medFr}/>
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Médicament de même molécule</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <CardRelatedMedicine similarMedicaments={medicaments} />
      </Grid>
    </Grid>
  )
}
export default SearchResult;
