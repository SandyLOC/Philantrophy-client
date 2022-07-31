import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicForm() {

  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="name"
            name="name"
            label="Campaign name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="location"
          value={country}
          onChange={handleChange}
          label="location"
        >
          <MenuItem value={'MEX'}>Mexico</MenuItem>
          <MenuItem value={'USA'}>USA</MenuItem>
          <MenuItem value={'CAN'}>Canada</MenuItem>
        </Select>
      </FormControl>
      </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
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
          rows={4}
          fullWidth
          variant="standard"
        />
      </Grid>
      </Grid>
    </React.Fragment>
  );
}