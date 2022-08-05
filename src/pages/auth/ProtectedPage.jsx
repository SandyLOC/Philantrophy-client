import React from "react";
import Container from '@mui/material/Container';

const ProtectedPage = () => {
  return (
    <div>
      <Container minWidth="lg">
      <h1>This page is hyper protected!</h1>
      </Container>
    </div>
  );
};

export default ProtectedPage;
