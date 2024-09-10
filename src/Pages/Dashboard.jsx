import React from "react";
import Card from "../components/common/Card";
import ResponsiveAppBar from "../components/layouts/Navbar";
import { Box } from "@mui/material";
import HeroSection from "../components/layouts/HeroSection";
import FeatureSection from "../components/layouts/FeatureSection";
import LeadCaptureForm from "../components/layouts/LeadCaptureForm";


function Dashboard() {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ maxWidth: "1440px", mx: "auto", px: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center", py: "24px" }}>
          <HeroSection />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center", // Center vertically
            gap: 3,
            py: "24px",
          }}
        >
          <Card />
          <Card />
          <Card />
        </Box>
        <Box sx={{width:1}}>
        <FeatureSection />
        <LeadCaptureForm />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;