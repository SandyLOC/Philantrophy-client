import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PopOver from '../PopOver';

export default function DetailsForm(props) {

  const { campaign, handleChange } = props

  return (
    <React.Fragment>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="picture"
            label="Image URL"
            name="picture"
            value={campaign.picture}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="iceBreak"
            label="Will be there an Ice Breaker? Please describe."
            multiline
            rows={2}
            name="iceBreak"
            value={campaign.iceBreak}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <PopOver {...props}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}