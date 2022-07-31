import React from 'react';
import Card from '../components/Card/Card';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";


function Campaigns() {
  return (
    <div className='Campaigns'>
      <Typography variant="h2" mt={2} mb={6}>Campaigns</Typography>
        
        <Box sx={{ flexGrow: 1 }}>

              <div className="container-cards">
              <Card/>
              <Card/>
              <Card/>
              </div>

        </Box>
            
        
       
    </div>
  )
}

export default Campaigns
