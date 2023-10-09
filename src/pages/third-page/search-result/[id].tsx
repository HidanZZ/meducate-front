// ** MUI Imports
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import AutocompleteComponent from "src/views/pages/medicaments/AutoComplete";
import CardRelatedMedicine from 'src/views/cards/CardRelatedMedicine';
import CardMedicineFr from "src/views/cards/CardMedicineFr";
import CardMedicine from 'src/views/cards/CardMedicine';
import { Medicament } from "src/types/apps/medicament";
import { useEffect } from "react";
import { getSimilarByDenomination } from "src/store/apps/medicament/components/getSimilarMedicamentsByDenomination";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { getMedicamentById, reset } from "src/store/apps/medicament/components/getMedicamentById";
import { useRouter } from "next/router";
import { MedFr } from "src/types/apps/medFr";
import { getByDenomination } from "src/store/apps/medFr/components/getMedicamentByDenomination";
import { getByMolecule} from "src/store/apps/medFr/components/getMedicamentByMolecule";



const SearchResult = () => {


  const dispatch = useDispatch<AppDispatch>();

  const { id } = useRouter().query;

  const { medFr }: { medFr: MedFr | null } = useSelector((state: any) => state.medFr.getMedicamentByDenomination);

  const { medFrMol }: { medFrMol: MedFr | null } = useSelector((state: any) => state.medFr.getMedicamentByMolecule);

  const { medicament }: { medicament: Medicament | null } = useSelector((state: any) => state.medicament.getMedicamentById);

  const { medicaments }: { medicaments: Array<Medicament> } = useSelector((state: any) => state.medicament.getSimilarByDenomination);



  useEffect(() => {
    if (id) {
      dispatch(getMedicamentById(id as string));
    }
    
return () => {
      dispatch(reset());
    };
  }, [id]);


  useEffect(() => {
    if (medicament) {

      dispatch(getSimilarByDenomination(medicament.nomDuMedicament));
      dispatch(getByDenomination(medicament.nomDuMedicament));

      if (medFr && medFr.cis_code === "") {
        dispatch(getByMolecule(medicament.substanceActive));
        console.log(medFrMol);
      }
    }
  }, [medicament]);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AutocompleteComponent hidden={false} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h5' mb={6}>Médicament</Typography>
        <CardMedicine medicament={medicament} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h5' mb={6}>Médicament disponible au France</Typography>
        <CardMedicineFr medFr={medFr} medFrMol={medFrMol} />
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
