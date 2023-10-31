import { Box, Container, CssBaseline } from "@mui/material";
import Header from "components/Header.js";
import LocationCards from "components/LocationCards";
import OptionsTab from "components/OptionsTab";
import React from "react";

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
      </Box>
    </React.Fragment>
  );
}

export default App;
