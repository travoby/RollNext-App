import React from 'react'
import DashboardLayoutBasic from './Pages/Dashboard';
import { Box } from '@mui/material';
import Footer from './components/layouts/Footer';
function App() {
  return (
    <Box sx={{ px:'24px',alignItems:'center'}}>
      <DashboardLayoutBasic />
      <Footer />
    </Box>
  )
}

export default App