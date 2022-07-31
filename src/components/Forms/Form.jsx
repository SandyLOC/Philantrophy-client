import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Form(props) {

  const {type} = props
  const {handleSubmit} =props

  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    return({
      username: data.get('username'),
      password: data.get('password'),
    });
  };*/

  return (
      <Container component="main" sx={{display: 'flex', justifyContent: 'center' }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 7,
            bgcolor: '#242424',
            padding: '2em',
            minWidth: '25vw',
            borderRadius: '2em',
          }}
        >
          
          <Avatar color="primary" sx={{ m: 1 }}>
            {type === "Sign Up" ? <AccountCircleIcon /> :
              <LockOutlinedIcon />}
          </Avatar>

          <Typography component="h5" variant="h5">
            {type}
          </Typography>
          <Box component="form" onSubmit={() => handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Username"
              name="user"
              autoComplete="user"
              
              autoFocus
            />
            {type === "Sign Up" &&
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              
              autoFocus
            />}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2}}
            >
              Submit
            </Button>

          </Box>
        </Box>

      </Container>
  );
}