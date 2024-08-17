import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ICardDataResponse } from "../interfaces";
import { ReactComponent as QuoteIcon } from "../assets/images/icon-quotes.svg";
import { useTestimonialCardStyles } from "../styles/testimonialCard.styles";

const TestimonialCard: React.FC<
  Pick<ICardDataResponse, "fullName" | "imageUrl" | "jobTitle" | "description">
> = ({ fullName, imageUrl, jobTitle, description }) => {
  const { classes } = useTestimonialCardStyles();

  return (
    <Grid
      container
      direction={"column"}
      className={classes.testimonialCardContainer}
    >
      <QuoteIcon />
      <Typography variant="body2" className={classes.testimonialDescription}>
        {description}
      </Typography>
      <Typography variant="h3" className={classes.fullName}>
        {fullName}
      </Typography>
      <Typography className={classes.jobTitle}>{jobTitle}</Typography>
      <img
        src={imageUrl}
        alt={`avatar of ${fullName}`}
        className={classes.avatar}
      />
    </Grid>
  );
};

export default TestimonialCard;
