// ** MUI Imports
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import AutocompleteComponent from "src/views/pages/dashboard/AutoComplete";
import CardRelatedMedicine from 'src/views/cards/CardRelatedMedicine'
import CardMedicine from 'src/views/cards/CardMedicine'

//import { useRouter } from 'next/router';


const SearchResult = () => {

   // Define a state to hold the search term
 
  //const [searchTerm, setSearchTerm] = useState<string>('');
  //const [searchResults, setSearchResults] = useState<any[]>([]);


  // Handle the search term change and update the search results
  // const handleSearchTermChange = (value: string) => {
  //       setSearchTerm(value);
  // };

  // useEffect(() => {
  //   // Filter the JSON data based on the search term
  //   const results = jsonData.filter((product) =>
  //     product['Nom du médicament'].toLowerCase().includes(searchTerm?.toString().toLowerCase() || '')
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);
  return (
    <Grid container spacing={6}>  
      <Grid item xs={12}>
        <AutocompleteComponent hidden={false} />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4 }}>
        <Typography variant='h5'>Your Product</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
          <CardMedicine/>
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
          <Typography variant='h5'>"Médicament de même molécule"</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardRelatedMedicine />
      </Grid>      
      <Grid item xs={12} sm={6} md={4}>
        <CardRelatedMedicine />
      </Grid>     
       <Grid item xs={12} sm={6} md={4}>
        <CardRelatedMedicine />
      </Grid>     
    </Grid>
  )
}

export default SearchResult
