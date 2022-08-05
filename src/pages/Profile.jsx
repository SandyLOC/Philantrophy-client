import { React, useState, useEffect } from 'react'
import { Avatar, Typography } from '@mui/material';
import Favorites from './Favorites';
import { Container, Box,  Grid, Paper, CssBaseline } from '@mui/material';

const achievements = [ 'flood', 'forest', 'grass', 'landscape', 'pedal_bike', 'pets', 'rocket_launch']
function Profile(props) {

  const { user } = props
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
       //Connect to the server
     fetch(`${process.env.REACT_APP_SERVER_URL}/user/profile/${user._id}`)
     .then(data => data.json())
     .then(profile => {
       setFavorites(profile.favorites)
     })
     .catch(console.log)
   }, [])

    
  return (
   <Container component="main" sx={{display: 'flex', justifyContent: 'center' }}>
        
    <Grid spacing={3} mt={1}>
      <Box
          sx={{
            marginTop: 2,
            bgcolor: 'inherit',
            padding: '2em',
            minWidth: '50vw',
            borderRadius: '2em',
            display: 'flex',
            justifyContent: 'space-between'
          }}
      >
        <Paper elevation={0}  mr={8} sx={{ my: { xs: 1, md: 1}, p: 1 }}>
        <Grid item xs={12} sm={12} ml={8}>
        <Typography variant="h2" mt={1} mb={4} mr={8}>{user.username}</Typography>
        
          <Avatar
            alt="user-img"
            src={user.picture}
            sx={{ width: 150, height: 150 }}
        />
        </Grid>
        </Paper>
      <Grid item xs={3} sm={3} mt={4} ml={4}>
      <Paper elevation={3}  sx={{ display: 'flex', flexWrap: 'wrap', my: { xs: 4, md: 6}, p: { xs: 2, md: 3 } }}>
      {achievements.map((trophy, index)=> {

        return(
          <div className="trophies achivements-profile">
            {index % 3 === 0 ? (
              <div className="achievement-frame-bronze" key={index} >
              <span class="material-icons md-48">{trophy}</span>
            </div>
            ) : (
              <div className="achievement-frame-gold" key={index} >
              <span class="material-icons md-48">{trophy}</span>
            </div>
            )}

          </div>
        )
      })}
      </Paper>
      </Grid>
      </Box>
      <Grid item xs={4} sm={4}>
        <Favorites user={user} favorites={favorites}/>
      </Grid>
    </Grid>
  </Container>

  )
}

export default Profile