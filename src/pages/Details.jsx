import * as React from 'react';
import '../components/Card/Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';
import Ratings from '../components/Ratings';
import FavoritesIcon from '../components/FavoritesIcon';
import Dial from '../components/Dial';
import Alert from '@mui/material/Alert';
import moment from 'moment';
import Container from '@mui/material/Container';

import { useParams, Link, useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';

export default function MultiActionAreaCard(props) {

  const { user } = props

  const { campaignId } = useParams()
  const [campaign, setCampaign] = useState({})

  const [status, setStatus] = useState(null);

  
  {/*Get campaign details from database*/}
  useEffect (() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/${campaignId}`)
    .then(datos => datos.json())
    .then(campaignData => {
        console.log(campaignData)
        setCampaign(campaignData)
    })
    .catch(console.log)
}, [status])


const navigate = useNavigate()
{/*Dial button actions*/}
  const edit = () => navigate(`/campaigns/edit/${campaignId}`);

  const deleteId = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/delete/${campaignId}`,{
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(campaign)
  })
  .then(res => {
    res.json()
    setStatus(<Alert severity="success">Campaign {campaignId} successfully deleted</Alert>)
  })
  .catch(error => setStatus(
  <Alert severity="error">"There was an error deleting the campaign! Please check the console."</Alert>
  ))

  }
  const checkFavorite = () => {
    console.log(user.favorites.includes(campaign._id))
    return user.favorites.includes(campaign._id)
  }


  const setFlag = (location) => {
    let flag = ""
    switch(location){
      case ("MEX"):
        flag = 'https://cdn.icon-icons.com/icons2/1694/PNG/512/mxmexicoflag_111665.png'
        break;
      case ("CAN"):
        flag = '"https://cdn.icon-icons.com/icons2/1694/PNG/512/cacanadaflag_111931.png"'
        break;
      case ("USA"):
        flag = 'https://cdn.icon-icons.com/icons2/1694/PNG/512/usunitedstatesflag_111929.png'
        break;
    }
    return flag;

  }

  return (
    <Container minWidth="lg">
    <div className="Details">

      {campaign ? (
    <Card sx={{ width: 800, padding:'0 1em'}}>
      <CardActionArea>
    
      <div className="favorites-icon">
      <FavoritesIcon campaignId={campaign._id} {...props} isFavorite={checkFavorite}/>
      </div>
        
        <CardContent sx={{display: 'flex'}}>

        <Grid item xs={3} sm={3} mr={6} sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="140"
          image={campaign.picture}
          alt={campaign.name}
        />
          <Typography gutterBottom variant="h5" component="div">
            {campaign.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          {campaign.description}.
          </Typography>
          </Grid>

          <Grid item xs={6} sm={6}>
          <div className="location-container">
          <Typography variant="h6" color="text.secondary" mr={2} sx={{display: 'block'}}>Location: </Typography>
          <img className="flag-icon" src={setFlag(campaign.location)} alt="flag" />
          </div>
          <Typography variant="h6" color="text.secondary" mt={3}>Category: {campaign.category}</Typography>
          <Typography variant="body1" color="text.secondary" mt={3}>Date: {moment(campaign.date).format('DD/MM/YYYY HH:mm')}</Typography>
          {campaign.iceBreak && (
          <Typography variant="body1" color="text.secondary" mt={6}>Ice Break: {campaign.iceBreak}</Typography>
          )}
          </Grid>

        </CardContent>
      </CardActionArea>
      <CardActions className='card-actions'>
        {/*Raitings component*/}
        <Ratings/>
        
        {campaign.achievement && (
          <div className="achievement-frame">
            <span class="material-icons md-48">{campaign.achievement}</span>
          </div>
        )}
        {user && (
      <>
      {user.role !== "admin" ? (
      <>
      {/*Share link button*/} 
        <Button size="small" color="primary">
          Share
        </Button> </>) : (
      <>
      <div><Dial edit={edit} deleteId={deleteId} /></div>

      </>)}
      </>
    )}
      </CardActions>

    </Card>
    ) : (      
    <div className="error-block">
       {status} 
    </div>
    )}

  </div>
  </Container>
  );
}

