import React from 'react';
import Typography from "@mui/material/Typography";

function Countries() {
  return (
    <div>
        <Typography variant="h2" mt={2} mb={6}>Countries</Typography>
        <div className='countries'>
          <img src="https://www.rabbitsabc.com/wp-content/uploads/2016/12/north-america.jpg" alt="" />
        </div>
    </div>
  )
}

export default Countries