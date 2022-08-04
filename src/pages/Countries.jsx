import React from 'react';
import Typography from "@mui/material/Typography";

function Countries() {
  return (
    <div>
        <Typography variant="h2" mt={2} mb={6}>COUNTRIES</Typography>
        <div className='countries'>
          <img src="https://rgp.com/wp-content/uploads/North-America-map.png" alt="map" />
        </div>
    </div>
  )
}

export default Countries