import { React, useState, useEffect } from 'react'
import { Avatar, Typography } from '@mui/material';
import Favorites from './Favorites';
import { Container, Box,  Grid, Paper, CssBaseline } from '@mui/material';


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
          }}
      >
        <Grid item xs={5} sm={5}>
          <Avatar
            alt="user-img"
            src={user.picture}
            sx={{ width: 150, height: 150 }}
        />
        </Grid>
        <Grid item xs={5} sm={5} ml={8}>
          <Typography variant="h2" mt={2} mb={5}>{user.username}</Typography>
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