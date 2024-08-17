import { Grid } from "@mui/material";
import React from "react";
import { useAboutStyles } from "../styles/about.styles";

const About: React.FC = () => {
  const { classes } = useAboutStyles();

  return (
    <Grid container className={classes.aboutContainer}>
      About Page
    </Grid>
  );
};

export default About;
