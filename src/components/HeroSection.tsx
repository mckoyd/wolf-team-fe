import { Grid, Typography } from "@mui/material";
import React from "react";
import { IHeroSection } from "../interfaces";
import { useHeroSectionStyles } from "../styles/heroSection.styles";

const HeroSection: React.FC<IHeroSection> = ({
  heroTitle,
  heroTitleSpan,
  heroHighlightedTitle,
  heroSubtitle,
  HeroBg,
  heroBgOrientation,
}) => {
  const { classes } = useHeroSectionStyles();

  return (
    <>
      <Grid container direction="column" className={classes.heroContainer}>
        <Typography variant="h2" className={classes.heroTitle}>
          {heroTitle}{" "}
          {heroTitleSpan && (
            <span className={classes.heroTitleSpan}>{heroTitleSpan}</span>
          )}
        </Typography>
        {heroHighlightedTitle && (
          <Typography variant="h2" className={classes.heroHighlightedTitle}>
            {heroHighlightedTitle}
          </Typography>
        )}
        {heroSubtitle && (
          <Typography variant="body2" className={classes.heroBody}>
            {heroSubtitle}
          </Typography>
        )}
      </Grid>
      {HeroBg && (
        <HeroBg
          className={
            heroBgOrientation === "right" ? classes.heroBgRight : classes.heroBg
          }
        />
      )}
    </>
  );
};

export default HeroSection;
