import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:1,
        height: '50vh',
        backgroundImage: 'url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom color='Black'>
            Welcome to Our Website
          </Typography>
          <Typography variant="h5" component="p" gutterBottom color='Blue'>
            Discover amazing features and enjoy your experience with us.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, px: 5, py: 1.5 }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
