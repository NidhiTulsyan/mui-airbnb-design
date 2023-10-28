import { Box, Button, MobileStepper, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views-utils';

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
          {location.locationImages.map((step, index) => {
            return (
              <div key={step.id}>
                <Box
                  component={"img"}
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxStep}
          position="static"
          activeStep={activestep}
          nextButton={
            <Button
              size="small"
              disabled={activestep === maxStep - 1}
              onClick={handleNext}
              sx={carouselDot}
            >
              <KeyboardArrowRightIcon />
            </Button>
          }
          backButton={
            <Button
              size="small"
              disabled={activestep === 0}
              onClick={handleBack}
              sx={carouselDot}
            >
              <KeyboardArrowLeftIcon />
            </Button>
          }
        ></MobileStepper>
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component={"h3"}>{location.location}</Typography>
          <Typography component={"h4"}>{location.days}</Typography>
          <Typography component={"h5"}>{location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <React.Fragment>
                <Typography component={"h5"}>New</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component={"h5"}>{location.rating}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
