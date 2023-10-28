import { Box, Grid } from "@mui/material";
import { locations as CardLocations } from "data/Mock-data";
import React, { useState } from "react";
import CarouselCard from "./CarouselCard";

const LocationCards = () => {
  const [cards] = useState(CardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} xs={12} sm={2} md={4} lg={3}>
              <CarouselCard location={location}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
