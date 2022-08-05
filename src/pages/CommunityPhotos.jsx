import React from 'react'
import Photos from '../components/Photos';
import Container from '@mui/material/Container';

function CommunityPhotos() {
  return (
    <Container minWidth="lg">
    <div className='Community'>

        <Photos />
    </div>
    </Container>
  )
}

export default CommunityPhotos