// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'
import { useRouter } from "next/router";

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

// ** Third Party Components
//import axios from 'axios'

// ** Types

// ** Demo Components Imports
import PreviewCard from './PreviewCard'
import { MedFr } from 'src/types/apps/medFr';
import { useSelector } from 'react-redux';
import {getMedicamentById , reset} from 'src/store/apps/medFr/components/getMedicamentById';
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";

const MedFrPreview = () => {
  // ** State
  
  const { id } = useRouter().query;
  const dispatch = useDispatch<AppDispatch>();
  const [error, ] = useState<boolean>(false)
  const { medFr }: { medFr: MedFr | null } = useSelector((state: any) => state.medicament.getMedicamentById);


  useEffect(() => {
    if (id) {
      dispatch ( getMedicamentById(id as string));
    }

    // Clean up on unmount or when id changes
    return () => {
      dispatch(reset());
    };
  }, [id]);

  if (medFr) {
    return (
      <>
        <Grid container spacing={6}>
          <Grid item xl={9} md={8} xs={12}>
            <PreviewCard medFr={medFr} />
          </Grid>
        </Grid>
      </>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            Invoice with the id: {id} does not exist. Please check the list of invoices:{' '}
            <Link href='/apps/invoice/list'>Invoice List</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default MedFrPreview;
