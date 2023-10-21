import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const MobileSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        border: "1px solid #ccc",
      }}
    ></Paper>
  );
};

export default MobileSearch;
