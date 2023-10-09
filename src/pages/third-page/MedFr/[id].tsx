// ** React Imports
import { useState, useEffect } from 'react';

// ** Next Import
import Link from 'next/link';
import { useRouter } from 'next/router';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

// ** Types

// ** Demo Components Imports
import PreviewCard from './PreviewCard';
import { MedFr } from 'src/types/apps/medFr';
import { useSelector } from 'react-redux';
import { getMedicamentById, reset } from 'src/store/apps/medFr/components/getMedicamentById';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';

const MedFrPreview = () => {
  // ** State
  const { id } = useRouter().query;
  const dispatch = useDispatch<AppDispatch>();
  const [error] = useState<boolean>(false);
  const { medFr }: { medFr: MedFr | null } = useSelector((state: any) => state.medFr.getMedicamentById);

  useEffect(() => {
    if (id) {
      dispatch(getMedicamentById(id as string));
    }

    // Clean up on unmount or when id changes
    return () => {
      dispatch(reset());
    };
  }, [id]);

  console.log('medFr', medFr);

  return (
    <Grid container spacing={5} justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
      <Grid item xl={9} md={8} xs={12}>
        {medFr ? (
          <div style={{ marginTop: '20px' }}>
            <PreviewCard medFr={medFr} />
          </div>
        ) : error ? (
          <Alert severity="error">
            Invoice with the id: {id} does not exist. Please check the list of invoices:{' '}
            <Link href="/apps/invoice/list">Invoice List</Link>
          </Alert>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default MedFrPreview;
