import { Grid } from "@mui/material";
import React from "react";
import { useHomeStyles } from "../styles/home.styles";

const Home: React.FC = () => {
  const { classes } = useHomeStyles();

  return (
    <Grid container className={classes.homeContainer}>
      Home page
    </Grid>
  );
};

export default Home;
