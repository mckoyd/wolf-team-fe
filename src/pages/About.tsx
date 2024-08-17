import { Grid } from "@mui/material";
import React from "react";
import { useAboutStyles } from "../styles/about.styles";
import HeroSection from "../components/HeroSection";
import { aboutHeroSubtitle, aboutHeroTitle } from "../config/about.config";
import { ReactComponent as AboutHeroBg } from "../assets/images/bg-pattern-about-1-mobile-nav-1.svg";

const About: React.FC = () => {
  const { classes } = useAboutStyles();

  return (
    <Grid container className={classes.aboutContainer}>
      <HeroSection
        heroTitle={aboutHeroTitle}
        heroSubtitle={aboutHeroSubtitle}
        HeroBg={AboutHeroBg}
        heroBgOrientation="right"
      />
    </Grid>
  );
};

export default About;
