import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function DetailsForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>

      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="url"
            label="Image URL"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="iceBreak"
            label="Will be there an Ice Breaker?, please describe"
            multiline
            rows={2}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="achievement" value="true" />}
            label="Give an Achievement to Volunteers!"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}