import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card  from '../Card/Card';
import Box from '@mui/material/Box';


export default function ReviewCampaign(props) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Card {...props}/>

      </Box>
    </div>
  );
}