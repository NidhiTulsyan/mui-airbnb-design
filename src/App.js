import { Box, Container, CssBaseline } from "@mui/material";
import Footer from "components/Footer";
import FooterMenu from "components/FooterMenu";
import Header from "components/Header.js";
import LocationCards from "components/LocationCards";
import OptionsTab from "components/OptionsTab";
import React from "react";
import { displayOnDesktop } from "themes/CommonTheme";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              height: 100,
              overflowY: "scroll",
            }}
          >
            <Container maxWidth={"xl"} sx={{ mb: 3, mt: 3 }}>
              <LocationCards />
            </Container>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
