import * as React from 'react';
import '../components/Card/Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Ratings from '../components/Ratings';
import Favorites from '../components/Favorites';
import Dial from '../components/Dial';
import Alert from '@mui/material/Alert';

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


  return (
    <div>
      {campaign ? (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
    
      <div className="favorites-icon">
      <Favorites />
      </div>

        <CardMedia
          component="img"
          height="140"
          image={campaign.picture}
          alt={campaign.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {campaign.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {campaign.description}.{campaign.location}, {campaign.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='card-actions'>
        {/*Raitings component*/}
        <Ratings/>
        
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

  );
}

