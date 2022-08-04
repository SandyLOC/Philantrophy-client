import React from 'react'
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Badges from '../components/Badges';

function Achievements() {

  return (
    <div>
      <Typography variant="h2" mt={2} mb={5}>ACHIEVEMENTS</Typography>
      <Paper elevation={3} sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}>
        
        
          <div className="trophies">
            <Badges />
          </div>

        
      </Paper>
    </div>
  )
}

export default Achievements