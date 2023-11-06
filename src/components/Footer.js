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
            width:'100%'
          }}
        >
          <Stack>
            <Paper>
              <Link href="#">2023 Airbnb Copywright</Link>
            </Paper>
            {
              FooterLinks.map(link=>{
                return(
                  <paper key={link.id}>
                    <Link href={link.url}>{link.text}</Link>
                  </paper>
                )
              })
            }
          </Stack>
          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{...justifyCenter,mr:1}}>
                  <BsGlobe size={24}/>
                </Box>
                English (CA)
              </Button>
              <Button></Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
