import { Box, Typography } from "@mui/material";
import { FaAirbnb } from "react-icons/fa";
import React from "react";
import { flexCenter } from "themes/CommonTheme.js";
import { pink } from "@mui/material/colors";

function Logo() {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          fontWeight: "bold",
          fontSize: "40px",
          color: (theme) => theme.palette.secondary.main,
        }}
        component={"h3"}
      >
        airBnB
      </Typography>
    </Box>
  );
}

export default Logo;
