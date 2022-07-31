import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';

const trophies = [
    'celebration', 'camera_alt', 'catching_pokemon', 'child_care', 'emoji_nature', 'accessibility', 'ac_unit', 
   'brush', 'scuba_diving', 'castle', 'hive', 'currency_exchange', 'dinner_dining', 'emoji_objects', 'volunteer_activism', 
   'yard', 'flood', 'forest', 'grass', 'landscape', 'pedal_bike', 'pets', 'rocket_launch', 'savings'
]
const iconsTheme = createTheme({
    components: {
      MuiIcon: {
        
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '20rem',
          },
        },
    },
  },
  });
function Achievements() {

  return (
    <div>
      <Paper elevation={3} sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}>
        <Typography variant="h2" mt={2} mb={6}>Achievements</Typography>
        
        <ThemeProvider theme={iconsTheme} sx={{fontSize: '50px'}}>
          <div className="trophies">
        {trophies.map((trophy, index)=> {
          console.log(trophy)
            return(
                <div className="achievement-frame" key={index} >
                  <span class="material-icons md-48">{trophy}</span>
                </div>
            )
        })}
        </div>
        </ThemeProvider>
        {trophies.length === 0 && <img src={"https://sd.keepcalms.com/i-w600/have-fun-and-actively-participate.jpg"} alt=""/>}
        
      </Paper>
    </div>
  )
}

export default Achievements