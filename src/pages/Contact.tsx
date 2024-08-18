import { Grid, Typography } from "@mui/material";
import React from "react";
import { useAboutStyles } from "../styles/about.styles";
import HeroSection from "../components/HeroSection";
import { qualifications } from "../config/contact.config";
import { useContactStyles } from "../styles/contact.styles";

const Contact: React.FC = () => {
  const { classes } = useContactStyles();

  return (
    <Grid container className={classes.contactContainer}>
      <HeroSection heroTitle="Contact" heroHighlightedTitle="Ask us about" />
      <Grid container direction="column" className={classes.qualifications}>
        {qualifications.map(({ Icon, description }, index: number) => (
          <Grid
            container
            className={classes.qualificationContainer}
            key={`${description}-${index}`}
          >
            <Icon />
            <Typography
              component={"span"}
              className={classes.qualificationDescription}
            >
              {description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Contact;
