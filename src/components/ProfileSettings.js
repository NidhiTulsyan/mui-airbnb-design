import { Box, Button, Link, Stack } from "@mui/material";
import { flexCenter } from "themes/CommonTheme.js";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

import React from "react";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become A host</Link>
      <Stack>
        <Button><BsGlobe size={24}/></Button>
        <Button sx={{
            borderRadius:10,
            border:'1px solid #ddd'
        }}>
            <Stack>
                <AiOutlineMenu size={24} />
                <FaRegUserCircle size={24} />
            </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
