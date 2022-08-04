import { React } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Card from '../components/Card/Card';

function Favorites(props) {

  const { user, favorites } = props


  return (
    <Grid spacing={3} mt={1}>
      <Typography variant="h2" mt={2} mb={4}>Favorites</Typography>
        
        <Grid container spacing={2}>

        {favorites.map((campaign, index) => {
        return(
          <Grid item xs={4} sm={4} key={index}>
            <Card  campaign={campaign} user={user} hideText={true}/>
          </Grid>
        )
      })}
    </Grid>

</Grid>
  )
}

export default Favorites

