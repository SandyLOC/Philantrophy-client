import * as React from 'react';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Add to Favorites' } };

export default function FavoritesIcon(props) {

  const { campaignId, user, isFavorite, setUser } = props
  const [favorite, setFavorite] = useState(isFavorite)
  const [checked, setChecked] = useState(null)
 
  const handleChange = (e) => {
    const newUser = {...user}

   if(favorite){
    removeFavorite()
    const filterFavorites = newUser.favorites.filter(favorite => favorite !== campaignId)
    newUser.favorites = filterFavorites
   } else {
    addToFavorites()
    newUser.favorites = [...newUser.favorites, campaignId]
  }
  setUser(newUser)
  }

  const addToFavorites = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/favorite/${campaignId}&${user._id}`,{
      method: "PUT",

    })
    .then(datos => datos.json())
    .then(data => {
      console.log(data)
    })
    .catch(console.log)
  }

  const removeFavorite = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/favoriteRemove/${campaignId}&${user._id}`,{
      method: "PUT",

    })
    .then(datos => datos.json())
    .then(data => {
    console.log(data)
    })
    .catch(console.log)
  }


  return (
    <div>
      <Checkbox {...label} 
      icon={<FavoriteBorder />} 
      checkedIcon={<Favorite sx={{color: '#f06292'}}/>} 
      checked={favorite}
      onChange={handleChange}
      name="favorites"
      />
    </div>
  );
}