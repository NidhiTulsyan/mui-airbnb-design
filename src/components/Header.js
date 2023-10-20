import { Box, Container } from "@mui/material";
import React from "react";
import { flexBetweenCenter, dFlex } from "themes/CommonTheme.js";

import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import ProfileSettings from "./ProfileSettings";

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
          <ProfileSettings />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
