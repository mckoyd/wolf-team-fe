import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useHomeStyles } from "../styles/home.styles";

import { ReactComponent as HeroBg } from "../assets/images/bg-pattern-home-2.svg";
import { ReactComponent as HighlightsBg } from "../assets/images/bg-pattern-home-3.svg";

const Home: React.FC = () => {
  const { classes } = useHomeStyles();

  return (
    <Grid container className={classes.homeContainer}>
      <Grid container direction="column" className={classes.heroContainer}>
        <Typography variant="h2" className={classes.heroTitle}>
          Find the best <span className={classes.heroTitleSpan}>talent</span>
        </Typography>
        <Typography variant="body2" className={classes.heroBody}>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </Typography>
      </Grid>
      <HeroBg className={classes.heroBg} />
      <Grid
        container
        direction="column"
        className={classes.highlightsContainer}
      >
        <Grid container>
          <Grid
            container
            direction="column"
            className={classes.highlightsTitleContainer}
          >
            <Divider className={classes.highlightsDivider} />
            <Typography
              variant="h2"
              fontSize={"2em"}
              className={classes.highlightsTitle}
            >
              Build & manage distributed teams like no one else.
            </Typography>
          </Grid>
          <HighlightsBg className={classes.highlightsBg} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
