// ** MUI Imports
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AutoCompleteMedicament from 'src/views/pages/medicaments/AutoCompleteMedicament'
import Image from 'next/image'


const MedicamentSearch = () => {
  return (
    <ApexChartWrapper>
      <Grid
        container
        direction="column" // Stack items vertically
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '50vh' }} // Adjust the height for mobile devices
      >
        <Grid item>
          <Image src='/images/logo-meducate.png' alt="Logo" width={330} height={330}></Image>
        </Grid>
        <Grid item style={{ width: '100%', maxWidth: '1000px' }}>
            <AutoCompleteMedicament />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default MedicamentSearch;
