import { Box, Card, CardContent, CardHeader, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import NotesListing from 'src/views/pages/notes/NotesListing'

const Notes = () => {
  const [role, setRole] = useState<string>('')
  const [plan, setPlan] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const handleRoleChange = (e: any) => setRole(e.target.value as string)
  const handlePlanChange = (e: any) => setPlan(e.target.value as string)
  const handleStatusChange = (e: any) => setStatus(e.target.value as string)

  return (
    <Box>
      <Card sx={{
        mb: 3,
      }}>
        <CardHeader title='Search Filters' />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item sm={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel id='role-select'>Select Role</InputLabel>
                <Select
                  fullWidth
                  value={role}
                  id='select-role'
                  label='Select Role'
                  labelId='role-select'
                  onChange={handleRoleChange}
                  inputProps={{ placeholder: 'Select Role' }}
                >
                  <MenuItem value=''>Select Role</MenuItem>
                  <MenuItem value='admin'>Admin</MenuItem>
                  <MenuItem value='author'>Author</MenuItem>
                  <MenuItem value='editor'>Editor</MenuItem>
                  <MenuItem value='maintainer'>Maintainer</MenuItem>
                  <MenuItem value='subscriber'>Subscriber</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel id='plan-select'>Select Plan</InputLabel>
                <Select
                  fullWidth
                  value={plan}
                  id='select-plan'
                  label='Select Plan'
                  labelId='plan-select'
                  onChange={handlePlanChange}
                  inputProps={{ placeholder: 'Select Plan' }}
                >
                  <MenuItem value=''>Select Plan</MenuItem>
                  <MenuItem value='basic'>Basic</MenuItem>
                  <MenuItem value='company'>Company</MenuItem>
                  <MenuItem value='enterprise'>Enterprise</MenuItem>
                  <MenuItem value='team'>Team</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel id='status-select'>Select Status</InputLabel>
                <Select
                  fullWidth
                  value={status}
                  id='select-status'
                  label='Select Status'
                  labelId='status-select'
                  onChange={handleStatusChange}
                  inputProps={{ placeholder: 'Select Role' }}
                >
                  <MenuItem value=''>Select Role</MenuItem>
                  <MenuItem value='pending'>Pending</MenuItem>
                  <MenuItem value='active'>Active</MenuItem>
                  <MenuItem value='inactive'>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <NotesListing />
    </Box>
  )
}

export default Notes
