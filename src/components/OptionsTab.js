import { Box, Button, Container, Tab, Tabs, tabsClasses } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import React, { useState } from "react";
import { locationsTab } from "data/Mock-data";

const OptionsTab = () => {
  const [value, setvalue] = useState(0);

  const handleChange = (e, newValue) => {
    setvalue(newValue);
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
            {
                locationsTab.map(tab=>{
                    return <Tab key={tab.id} icon={tab.icon} label={tab.label}/>
                })
            }
        </Tabs>
      </Box>
    </Container>
  );
};

export default OptionsTab;
