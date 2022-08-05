import React from 'react';
import Card from '../components/Card/Card';
import { Grid, Typography, Input  } from '@mui/material';
import {useState, useEffect } from 'react';
import Container from '@mui/material/Container';

function Campaigns(props) {

  const [campaigns, setCampaign] = useState([])
  const [data, setData] = useState([]);
  const [dataCp, setDataCp] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  //Connect to the server
  fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns`)
  .then(data => data.json())
  .then(campaign => {
    setCampaign(campaign)
    setDataCp(campaign)
  })
  .catch(console.log)

}, [props])

const updateInput = (e) => {
  setSearch(e.target.value)
}

//UseEffect checks the update of the input state
useEffect(() => {
  const campaignFilter = dataCp.filter((campaign) => {
    return campaign.name.toLowerCase().includes(search.toLocaleLowerCase())
  })
  setCampaign(campaignFilter)
}, [search])

  return (
    <Container minWidth="lg">   
    <div className="search">
    <Input placeholder="Search Campaign" value={search} onChange={updateInput} fullWidth/> 
    </div>
    <Grid  mt={1}>

      <Typography variant="h2" mt={2} mb={4} >CAMPAIGNS</Typography>
        
        <Grid container spacing={2}>
          
        {campaigns.map(campaign => {
        return(
          <Grid item xs={4} sm={4} key={campaign._id}>
            <Card  campaign={campaign} {...props} />
          </Grid>
        )
      })}

    </Grid>

      </Grid>

      </Container>
  )
}

export default Campaigns
