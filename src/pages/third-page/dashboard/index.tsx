// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

import EcommerceTotalProfit from 'src/views/dashboards/EcommerceTotalProfit'
import CrmWeeklySales from 'src/views/dashboards/CrmWeeklySales'
import AutocompleteComponent from 'src/views/pages/medicaments/AutoComplete'
import EcommerceWebsiteStatistics from 'src/views/dashboards/EcommerceWebsiteStatistics'
import Link from 'next/link'

const MedicamentDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid item xs={12} md={4} sx={{ order: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <AutocompleteComponent hidden={false} />
          </Grid>
          <Grid item xs={12} md={8} sx={{ order: 0 }}>
            <Link href={'/third-page/search-result'}>
              <EcommerceTotalProfit />
            </Link>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ order: 0 }}>
            <EcommerceWebsiteStatistics />
          </Grid>
          <Grid item xs={12} md={4} sm={8}>
            <CrmWeeklySales />
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default MedicamentDashboard;
