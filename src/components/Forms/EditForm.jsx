import * as React from 'react';
import { FormControl, TextField, InputLabel, Select } from '@mui/material';
import { Grid, MenuItem, Box, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';
import DatePicker from '../DatePicker';


export default function BasicForm(props) {

    const navigate = useNavigate();

    const { campaignId } = useParams()
    const [campaign, setCampaign] = useState({})

    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect (() => {
      fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/${campaignId}`)
      .then(datos => datos.json())
      .then(campaignData => {
          setCampaign(campaignData)
          setLocation(campaignData.location)
          setCategory(campaignData.category)
          setDate(campaignData.date)
      })
      .catch(console.log)
  }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
    
        return setCampaign({ ...campaign, [name]: value });
      }
      
    const handleChange = (event) => {
      setLocation(event.target.value);
      return setCampaign({ ...campaign, location: location })
    };
    const handleCategory = (event) => {
      setCategory(event.target.value)
      return setCampaign({ ...campaign,category: category })
    };
    const handleDate = (value) => {
      setDate(value)
      return setCampaign({ ...campaign, date: date })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/edit/${campaignId}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(campaign)
        })
        .then(datos => datos.json())
        .then(campaignData => {
            setCampaign(campaignData)
        })
        .catch(console.log)
        navigate('/campaigns')
    }

  return (
    <React.Fragment>

        <Typography variant="h2" mt={1} mb={3}>Edit: {campaign.name}</Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1, maxWidth: 600, margin: '0 auto'}}>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={12} sm={12} mb={2}>
          <TextField
            required
            id="name"
            name="name"
            label="Campaign name"
            placeholder={campaign.name}
            value={campaign.name}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            focused
          />
        </Grid>
        <Grid item xs={3} sm={3}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="country">Country</InputLabel>
        <Select
          required
          id="location"
          name="location"
          onChange={handleChange}
          label="location"
          value={location}
        >
          <MenuItem value={'MEX'}>Mexico</MenuItem>
          <MenuItem value={'USA'}>USA</MenuItem>
          <MenuItem value={'CAN'}>Canada</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4} sm={4} >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          required
          id="category"
          name="category"
          onChange={handleCategory}
          label="category"
          value={category}
        >
          <MenuItem value={'People'}>People</MenuItem>
          <MenuItem value={'Animals'}>Animals</MenuItem>
          <MenuItem value={'Forestry'}>Forestry</MenuItem>
          <MenuItem value={'Beautify'}>Beautify</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4} sm={4}>
      <DatePicker handleDate={handleDate} date={date}/>

      </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            value={campaign.address}
            onChange={handleInputChange}
            fullWidth
            autoComplete="address"
            variant="standard"
            focused
          />
        </Grid>

        <Grid item xs={12}>
      <TextField
          required
          id="description"
          label="Description"
          multiline
          rows={4}
          name="description"
          value={campaign.description}
          onChange={handleInputChange}
          fullWidth
          variant="standard"
          focused
        />
      </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="picture"
            label="Image URL"
            name="picture"
            value={campaign.picture}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            focused
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="iceBreak"
            label="Will be there an Ice Breaker?, please describe"
            multiline
            rows={2}
            name="iceBreak"
            value={campaign.iceBreak}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
            focused
          />
        </Grid>
        
      </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2}}>
            Submit
        </Button>
      </Box>
    </React.Fragment>
  );
}