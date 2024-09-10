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
        <Box>
        <FeatureSection />
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
          <Card
            title="Vegetable Stir Fry"
            subheader="October 1, 2024"
            image="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068179/Traditional-Cambodian-Dishes-To-Eat-Amok/Traditional-Cambodian-Dishes-To-Eat-Amok.jpg"
            content="A quick and easy stir fry recipe that you can customize with your favorite vegetables."
            avatarInitial="V"
          />
          <Card
            title="Vegetable Stir Fry"
            subheader="October 1, 2024"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505"
            content="A quick and easy stir fry recipe that you can customize with your favorite vegetables."
            avatarInitial="V"
          />
          <Card
            title="Mr, Novali netko"
            subheader="October 1, 2022"
            image="https://images.squarespace-cdn.com/content/v1/58dd75f229687f5a850ec676/4da6896d-061c-4029-9457-02701e6049ed/how-much-does-a-food-photographer-make.jpg"
            content="A quick and easy stir fry recipe that you can customize with your favorite vegetables."
            avatarInitial="M"
          />
        </Box>
        <Box sx={{ width: 1 }}>
          <LeadCaptureForm />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
