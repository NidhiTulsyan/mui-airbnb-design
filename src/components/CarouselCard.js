import { Box, Button, MobileStepper, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views-utils";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  carouselDot,
  carouselImage,
  dFlex,
  fixedBottom,
  fixedIcon,
  flexBetween,
} from "themes/CommonTheme";

const CarouselCard = ({ location }) => {
  const [activestep, setActivestep] = useState();
  const maxStep = location.locationImages.length;
  const handleNext = () => {
    setActivestep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActivestep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActivestep(step);
  };
  return (
    <Box className="carouselCards" sx={{ flexGrow: 1, position: "relative" }}>
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>
      {location.locationImages.length && (
        <SwipeableViews
          axis={"x"}
          index={activestep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {
            location.locationImages.map((step,index)=>{
              return(
                <div>
                  
                </div>
              )
            })
          }
        </SwipeableViews>
      )}
    </Box>
  );
};

export default CarouselCard;
