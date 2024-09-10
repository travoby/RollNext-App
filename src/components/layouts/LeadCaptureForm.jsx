import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const LeadCaptureForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add functionality to handle form submission, like sending data to an API
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 4,
          p: 3,
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up for Updates
        </Typography>
        {submitted ? (
          <Typography variant="body1" align="center" color="green">
            Thank you for signing up!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 2 }}
            >
              Subscribe
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default LeadCaptureForm;