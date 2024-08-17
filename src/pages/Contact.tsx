import { Grid } from "@mui/material";
import React from "react";
import { useAboutStyles } from "../styles/about.styles";

const Contact: React.FC = () => {
  const { classes } = useAboutStyles();

  return (
    <Grid container className={classes.aboutContainer}>
      Contact Page
    </Grid>
  );
};

export default Contact;
