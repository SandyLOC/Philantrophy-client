import * as React from 'react';
import { Grid, TextField, InputLabel, MenuItem } from '@mui/material';
import { FormControl, Select } from '@mui/material';
import DatePicker from '../DatePicker'; 

export default function BasicForm(props) {

  const { campaign, handleChange, handleDate, date  } = props

  return (
    <React.Fragment>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="name"
            label="Campaign name"
            name="name"
            value={campaign.name}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="location-label">Country</InputLabel>
        <Select
          required
          id="location"
          name="location"
          value={campaign.location}
          onChange={handleChange}
          label="location"
        >
          <MenuItem value={'MEX'}>Mexico</MenuItem>
          <MenuItem value={'USA'}>USA</MenuItem>
          <MenuItem value={'CAN'}>Canada</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          required
          id="category"
          name="category"
          value={campaign.category}
          onChange={handleChange}
          label="category"
        >
          <MenuItem value={'people'}>People</MenuItem>
          <MenuItem value={'animals'}>Animals</MenuItem>
          <MenuItem value={'forestry'}>Forestry</MenuItem>
          <MenuItem value={'beautify'}>Beautify</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <DatePicker handleDate={handleDate} date={date}/>
      </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            value={campaign.address}
            onChange={handleChange}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
      <TextField
          required
          id="description"
          label="Description"
          multiline
          name="description"
          value={campaign.description}
          onChange={handleChange}
          rows={4}
          fullWidth
          variant="standard"
        />
      </Grid>
      </Grid>
    </React.Fragment>
  );
}