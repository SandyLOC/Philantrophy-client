import * as React from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Add to Favorites' } };

export default function FavoritesIcon(props) {

  const { campaignId, user } = props
  const [favorite, setFavorite] = useState(false)


  const handleChange = (e) => {  
    console.log(campaignId)
    setFavorite(e.target.checked)
    if(favorite){
      fetch(`${process.env.REACT_APP_SERVER_URL}/user/favorite/${campaignId}&${user._id}`,{
      method: "PUT",

    })
    .then(datos => datos.json())
    .then(data => {
      console.log(data)
    })
    .catch(console.log)

    }else {
      
    }

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