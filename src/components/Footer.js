import { Box, Button, Container, Link, Paper, Stack } from "@mui/material";
import React from "react";
import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "themes/CommonTheme";
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";

const FooterLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "SiteMap", url: "#" },
  { id: 4, text: "Destinations", url: "#" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default Footer;
