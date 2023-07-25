import { Card, CardContent, CardHeader, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'
import Icon from 'src/@core/components/icon'

const SearchBar = () => {
  const [category, setCategory] = useState<string>('')
  const [pathology, setPathology] = useState<string>('')

  const handleCategoryChange = (e: any) => setCategory(e.target.value as string)
  const handlePathologyChange = (e: any) => setPathology(e.target.value as string)

  return (
    <Card
      sx={{
        mb: 3
      }}
    >
      <CardHeader title='Search Filters' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                
                placeholder='Search for Notes...'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ color: 'text.secondary' }}>
                      <Icon icon='mdi:magnify' fontSize={20} />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='Category-select'>Select Category</InputLabel>
              <Select
                fullWidth
                value={category}
                id='select-Category'
                label='Select Category'
                labelId='Category-select'
                onChange={handleCategoryChange}
                inputProps={{ placeholder: 'Select Category' }}
              >
                <MenuItem value=''>Select Category</MenuItem>
                <MenuItem value='category1'>Category 1</MenuItem>
                <MenuItem value='category2'>Category 2</MenuItem>
                <MenuItem value='category3'>Category 3</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='Pathology-select'>Select Pathology</InputLabel>
              <Select
                fullWidth
                value={pathology}
                id='select-Pathology'
                label='Select Pathology'
                labelId='Pathology-select'
                onChange={handlePathologyChange}
              >
                <MenuItem value=''>Select Pathology</MenuItem>
                <MenuItem value='pathology1'>Pathology 1</MenuItem>
                <MenuItem value='pathology2'>Pathology 2</MenuItem>
                <MenuItem value='pathology3'>Pathology 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SearchBar
