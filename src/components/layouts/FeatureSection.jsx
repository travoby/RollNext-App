import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const features = [
  {
    title: "Dessert",
    description: "This is a brief description of Feature One.",
    image: "https://biancazapatka.com/wp-content/uploads/2023/07/erdbeer-joghurt-dessert.jpg",
  },
  {
    title: "Soft Drinks",
    description: "For your enjoy",
    image: "https://www.themediterraneandish.com/wp-content/uploads/2022/08/ouzo-drink-3.jpg",
  },
  {
    title: "Drinks",
    description: "In here have a lot of Drinks",
    image: "https://bakewithshivesh.com/wp-content/uploads/2022/04/IMG_9331-scaled.jpg",
  },
  {
    title: "Ice Cream",
    description: "Enjoy with our drink.",
    image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg",
  },
];

const FeatureSection = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={feature.image}
                alt={feature.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureSection;