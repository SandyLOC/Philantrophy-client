import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DetailsForm from './DetailsForm';
import BasicForm from './BasicForm';
import ReviewCampaign from './ReviewCampaign';

const steps = ['Basic Data', 'Add Details', 'Review the Campaign'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <DetailsForm />;
    case 2:
      return <ReviewCampaign />;
    default:
      throw new Error('Unknown step');
  }
}

export default function StepCreation() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
                        <Typography variant="h5" mb={5} gutterBottom sx={{textAlign: 'center', fontFamily: 'Jua'}}>
                            Campaign created and ready for volunteers to join!
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{textAlign: 'center', fontFamily: 'Cabin Sketch'}}>
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
                    {activeStep === steps.length - 1 ? "Let's Go!" : 'Next'}
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