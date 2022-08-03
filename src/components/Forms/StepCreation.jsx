import * as React from 'react';
import { AppBar, Container, Box, Paper, Typography }from '@mui/material';
import { Stepper, Step, StepLabel } from '@mui/material/';
import DetailsForm from './DetailsForm';
import BasicForm from './BasicForm';
import ReviewCampaign from './ReviewCampaign';
import { Alert, Button } from '@mui/material';
import { useState } from 'react';

const steps = ['Basic Data', 'Add Details', 'Review the Campaign'];


export default function StepCreation(props) {

  const { user } = props
  const [activeStep, setActiveStep] = useState(0);

  const [campaign, setCampaign] = useState({})
  const [date, setDate] = useState(new Date());

  function handleChange(event) {
      const { name, value } = event.target;
      console.log({...campaign, [name]: value})
      return setCampaign({ ...campaign, [name]: value });
    }

    const handleDate = (value) => {
      setDate(value)
      return setCampaign({ ...campaign, date: date })
    };

    const handleSubmit = () => {

      fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/new-campaign`,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(campaign)
      })
      .then(datos => datos.json())
      .then(campaignData => {
          setCampaign(campaignData)
      })
      .catch(console.log)

  }

  const handleNext = () => {
    if(activeStep === steps.length -1){
      handleSubmit()
    } 
    setActiveStep(activeStep + 1);

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicForm handleChange={handleChange} handleDate={handleDate} campaign={campaign} date={date}/>;
      case 1:
        return <DetailsForm handleChange={handleChange} campaign={campaign}/>;
      case 2:
        return <ReviewCampaign user={user} campaign={campaign}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
<div>

      <Container component="main" maxWidth="sm" sx={{ mb: 4}}>
        
        <Paper variant="outlined" sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}>
        
        {activeStep !== steps.length && (
            <React.Fragment>
            <AppBar
            position="absolute"
            elevation={0}
            sx={{
              position: 'relative',
              borderBottom: (t) => `1px solid ${t.palette.divider}`,
              marginBottom: 4,
            }}
          >
            <Typography component="h1" variant="h4" align="center">
            Create New Campaign
            </Typography>
          </AppBar>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </React.Fragment>
          )}
          <React.Fragment>
            {activeStep === steps.length ? (
                        <React.Fragment>
                          <Alert severity="success">Campaign created and ready for volunteers to join!</Alert>

                        <Typography variant="h5" mt={5} gutterBottom sx={{textAlign: 'center', fontFamily: 'Cabin Sketch'}}>
                            Thank you for your awesome contribution to this world ☺
                        </Typography>
        
                      </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Create!" : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
      </div>
  );
}