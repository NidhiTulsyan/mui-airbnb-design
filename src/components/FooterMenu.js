import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegUserCircle, FaSearch, FaRegHeart } from "react-icons/fa";

const footerMenu = [
  { id: 1, text: "Explore", icon: <FaSearch /> },
  { id: 2, text: "Wishlist", icon: <FaRegHeart /> },
  { id: 3, text: "Login", icon: <FaRegUserCircle /> },
];
const FooterMenu = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
      <Stack>
        {footerMenu.map((item) => {
          return <Button key={item.id}></Button>;
        })}
      </Stack>
    </Box>
  );
};

export default FooterMenu;
