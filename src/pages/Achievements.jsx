import React from 'react'
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const trophies = [
  'celebration', 'camera_alt', 'catching_pokemon', 'child_care', 'emoji_nature', 'accessibility', 'ac_unit', 
 'brush', 'scuba_diving', 'castle', 'hive', 'currency_exchange', 'dinner_dining', 'emoji_objects', 'volunteer_activism', 
 'yard', 'flood', 'forest', 'grass', 'landscape', 'pedal_bike', 'pets', 'rocket_launch', 'savings'
]

let randomArr = [...trophies]
let randomArr2 = [...trophies]
function shuffleArray(arr) {
  randomArr.sort(() => Math.random() - 0.5);
  randomArr2.sort(() => Math.random() - 0.5);
}

shuffleArray(trophies);
console.log(randomArr)

function Achievements() {

  return (
    <div>
      <Container minWidth="lg">
      <Typography variant="h2" mt={2} mb={5}>ACHIEVEMENTS</Typography>

      <Paper elevation={3} sx={{ display: 'flex', flexWrap: 'wrap', my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}>
      {trophies.map((trophy, index)=> {

        return(
          <div className="trophies">
            <div className="achievement-frame-bronze" key={index} >
                <span class="material-icons md-48">{trophy}</span>
            </div>
          </div>
        )
        })}
        
      </Paper>

      <Paper elevation={3} sx={{ display: 'flex', flexWrap: 'wrap', my: { xs: 1, md: 2 }, p: { xs: 2, md: 2 } }}>
      {randomArr.map((trophy, index)=> {

        return(
          <div className="trophies">
            <div className="achievement-frame-silver" key={index} >
                <span class="material-icons md-48">{trophy}</span>
            </div>
          </div>
        )
        })}
        
      </Paper>

      <Paper elevation={3} sx={{ display: 'flex', flexWrap: 'wrap', my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}>
      {randomArr2.map((trophy, index)=> {

        return(
          <div className="trophies">
            <div className="achievement-frame-gold" key={index} >
                <span class="material-icons md-48">{trophy}</span>
            </div>
          </div>
        )
        })}
        
      </Paper>
      </Container>
    </div>
  )
}

export default Achievements