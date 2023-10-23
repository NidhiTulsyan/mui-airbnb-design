import { Box, CssBaseline } from "@mui/material";
import Header from "components/Header.js";
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
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
