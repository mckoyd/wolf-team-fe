import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useHomeStyles } from "../styles/home.styles";

import { ReactComponent as HeroBg } from "../assets/images/bg-pattern-home-2.svg";
import { ReactComponent as HighlightsBg } from "../assets/images/bg-pattern-home-3.svg";
import HighlightCard from "../components/HighlightCard";
import {
  highlightCards,
  highlightCardTitle,
} from "../config/highlightCard.config";
import { IHightlightCard } from "../interfaces";
import { heroSubtitle, heroTitle, heroTitleSpan } from "../config/home.config";

const Home: React.FC = () => {
  const { classes } = useHomeStyles();

  return (
    <Grid container className={classes.homeContainer}>
      <Grid container direction="column" className={classes.heroContainer}>
        <Typography variant="h2" className={classes.heroTitle}>
          {heroTitle}{" "}
          <span className={classes.heroTitleSpan}>{heroTitleSpan}</span>
        </Typography>
        <Typography variant="body2" className={classes.heroBody}>
          {heroSubtitle}
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
              {highlightCardTitle}
            </Typography>
          </Grid>
          <HighlightsBg className={classes.highlightsBg} />
        </Grid>
        <Grid container direction="column" className={classes.highlightCards}>
          {highlightCards.map(
            ({ Icon, title, description }: IHightlightCard, index: number) => (
              <HighlightCard
                Icon={Icon}
                title={title}
                description={description}
                key={`${title}-${index}`}
              />
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
