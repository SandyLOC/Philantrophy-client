import React from 'react'
import Avatar from '@mui/material/Avatar';


function Profile(props) {

    const { user } = props

  return (
    <div>
    <Avatar
        alt="user-img"
        src={user.picture}
        sx={{ width: 150, height: 150 }}
      />
    </div>
  )
}

export default Profile