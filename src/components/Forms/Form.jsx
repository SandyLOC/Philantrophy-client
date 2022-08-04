import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { FormControlLabel, TextField, Checkbox } from '@mui/material';
import { Container, Box, Paper, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Form(props) {
 console.log(props)
  const { type, form, handleFormSubmission, handleInputChange } = props
  const {username, email, password } = form
  
  return (
      <Container component="main" sx={{display: 'flex', justifyContent: 'center' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            bgcolor: 'inherit',
            padding: '2em',
            minWidth: '30vw',
            borderRadius: '2em',
          }}
        >
          <Paper elevation={3} sx={{ 
            p: { xs: 2, md: 3 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' 
            }}>
          <Avatar color="primary" sx={{ m: 1 }}>
            {type === "Sign Up" ? <AccountCircleIcon /> :
              <LockOutlinedIcon />}
          </Avatar>

          <Typography component="h5" variant="h5">
            {type}
          </Typography>
          <Box component="form" onSubmit={handleFormSubmission} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
              autoComplete="username"
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
              value={email}
              onChange={handleInputChange}
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
              value={password}
              onChange={handleInputChange}
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
          </Paper>
        </Box>

      </Container>
  );
}