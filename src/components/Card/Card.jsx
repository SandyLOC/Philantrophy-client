import * as React from 'react';
import './Card.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Ratings from '../Ratings';
import FavoritesIcon from '../FavoritesIcon';
import { Link } from "react-router-dom";


export default function MultiActionAreaCard(props) {

  const { campaign, user, hideText } = props

  return (
    <Card  sx={{ maxWidth: 345}}>
      <CardActionArea>
    
      <div className="favorites-icon">
      <FavoritesIcon campaignId={campaign._id} user={user}/>
      </div>

        <CardMedia
          component="img"
          height="140"
          image={campaign.picture}
          alt="campaign-image"
        />
        <CardContent sx={{ minHeight: 180}}>
          <Typography gutterBottom variant="h5" component="div">
            {campaign.name}
          </Typography>
          {!hideText && (
          <Typography variant="body2" color="text.secondary">
          {campaign.description}
          </Typography>
          )}
          
        </CardContent>
      </CardActionArea>
      <CardActions className='card-actions'>
        {/*Raitings component*/}
        <Ratings/>

        <Link to={`/campaigns/${campaign._id}`} className="buttonLink">
        <Button size="small" color="primary">
          Details
        </Button>
        </Link>

        {user && (
      <>
      {user.role !== "admin" && (
      <>
      {/*Share link button*/} 
        <Button size="small" color="primary">
          Share
        </Button> 
        </>) }
      </>
    )}
      </CardActions>

    </Card>
  );
}
