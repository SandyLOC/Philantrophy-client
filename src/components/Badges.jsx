import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';

function Badges(props) {

   const {setCampaign, campaign} = props

   const handleSelection = (selected) => {
    setCampaign({...campaign, achievement: selected} )
   }
  const trophies = [
    'celebration', 'camera_alt', 'catching_pokemon', 'child_care', 'emoji_nature', 'accessibility', 'ac_unit', 
   'brush', 'scuba_diving', 'castle', 'hive', 'currency_exchange', 'dinner_dining', 'emoji_objects', 'volunteer_activism', 
   'yard', 'flood', 'forest', 'grass', 'landscape', 'pedal_bike', 'pets', 'rocket_launch', 'savings'
]

  return (
    <>
        {trophies.map((trophy, index)=> {

            return(
              <ToggleButton onClick={() => handleSelection(trophy)}>
                <div className="achievement-frame" key={index} >
                  <span class="material-icons md-48">{trophy}</span>
                </div>
              </ToggleButton>
            )
        })}        
        {trophies.length === 0 && <img src={"https://sd.keepcalms.com/i-w600/have-fun-and-actively-participate.jpg"} alt=""/>}
       
    </>
  )
}

export default Badges