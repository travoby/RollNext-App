import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#3f51b5', 
        color: 'white', 
        py: 3, 
        position: 'relative', 
        bottom: 0, 
        width: '100%' 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Your Company Name
        </Typography>
        <Typography variant="body2" align="center">
          All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;