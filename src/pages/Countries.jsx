import React from 'react';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

function Countries() {
  return (
    <div>
      <Container minWidth="lg">
        <Typography variant="h2" mt={2} mb={6}>COUNTRIES</Typography>
        <div className='countries'>
          <img src="https://rgp.com/wp-content/uploads/North-America-map.png" alt="map" />
        </div>
        </Container>
    </div>
  )
}

export default Countries