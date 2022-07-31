import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

//Copyright link
function CopyrightLink(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/SandyLOC">
          Coded by Sandra Lopez
        </Link>{' '}
        {new Date().getFullYear()}.
        
      </Typography>
    );
  }

function Copyright() {
  return (
    <CopyrightLink sx={{ mt: 8, mb: 4 }} />
  )
}

export default Copyright