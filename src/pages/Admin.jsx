import React from 'react'
import Typography from "@mui/material/Typography";

const Admin = () => {
  return (
    <div className="Amin">
      
      <div className="admin-img">
        <img src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="admin-img"/>
        <div className="admin">
          <Typography variant="h1" mt={8} mb={7}>Welcome, you are an Administrator</Typography>
          <Typography variant="h5" color="text.secondary" mt={2} >You can add, edit and delete campaigns to invite our community to join.</Typography>
      </div>
      </div>

    </div>
  )
}

export default Admin