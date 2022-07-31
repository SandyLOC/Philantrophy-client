import * as React from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Ratings from '../Ratings';
import Favorites from '../Favorites';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <div className="favorites-icon">
      <Favorites />
      </div>
        <CardMedia
          component="img"
          height="140"
          image="https://www.stevesjogren.com/wp-content/uploads/2019/01/smalltreehandenvironmentcreditShuterstockcom.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Let's plant some trees!
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Public Works Department will hold a tree planting event in the 1100 block of Ditmar Street on Saturday, 
          April 14 from 7:30-9:30 a.m. Volunteers needed! To volunteer, please arrive at the address and time above or contact 
          (760) 435-5208 for more information.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='card-actions'>
        {/*Raitings component*/}
        <Ratings/>
        {/*Share link button*/}
        <Button size="small" color="primary">
          Share
        </Button>
        
      </CardActions>
    </Card>
  );
}
