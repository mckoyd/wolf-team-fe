import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAboutStyles } from "../styles/about.styles";
import HeroSection from "../components/HeroSection";
import { aboutHeroSubtitle, aboutHeroTitle } from "../config/about.config";
import { ReactComponent as AboutHeroBg } from "../assets/images/bg-pattern-about-1-mobile-nav-1.svg";
import { ReactComponent as DirectorSectionBg } from "../assets/images/bg-pattern-about-2-contact-1.svg";
import {
  directorSectionTitle,
  getDirectorCards,
} from "../config/directorCard.config";
import { ICardDataResponse } from "../interfaces";
import DirectorCard from "../components/DirectorCard";
import { ReactComponent as FacebookIcon } from "../assets/images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon-twitter.svg";
import { ReactComponent as CrossIcon } from "../assets/images/icon-close.svg";

const About: React.FC = () => {
  const { classes } = useAboutStyles();

  const [directorCards, setDirectorCards] = useState<
    Pick<
      ICardDataResponse,
      "fullName" | "imageUrl" | "jobTitle" | "description"
    >[]
  >([]);

  const generateDirectorCards = async () => {
    const cards = await getDirectorCards();
    setDirectorCards(cards);
  };

  useEffect(() => {
    generateDirectorCards();
  }, []);

  return (
    <Grid container className={classes.aboutContainer}>
      <HeroSection
        heroTitle={aboutHeroTitle}
        heroSubtitle={aboutHeroSubtitle}
        HeroBg={AboutHeroBg}
        heroBgOrientation="right"
      />

      <Grid container direction={"column"} className={classes.directorSection}>
        <DirectorSectionBg className={classes.directorSectionBG} />
        <Typography
          variant="h2"
          fontSize={"2em"}
          className={classes.directorSectionTitle}
        >
          {directorSectionTitle}
        </Typography>
        <Grid container direction={"column"} className={classes.directorCards}>
          {directorCards.length === 0 ? (
            <CircularProgress className={classes.loader} />
          ) : (
            directorCards.map(
              (
                {
                  fullName,
                  imageUrl,
                  jobTitle,
                  description,
                }: Pick<
                  ICardDataResponse,
                  "fullName" | "imageUrl" | "jobTitle" | "description"
                >,
                index: number
              ) => (
                <DirectorCard
                  jobTitle={jobTitle}
                  fullName={fullName}
                  description={description}
                  imageUrl={imageUrl}
                  key={`${fullName}-${index}`}
                />
              )
            )
          )}

          <Grid
            container
            direction="column"
            className={classes.directorCardContainer}
          >
            <Typography variant="h3" className={classes.fullName}>
              Aden Allan
            </Typography>

            <Typography variant="body2" className={classes.moreInfo}>
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </Typography>

            <Grid container className={classes.iconContainer}>
              <TwitterIcon />
              <FacebookIcon />
            </Grid>

            <IconButton className={classes.crossBtn}>
              <CrossIcon className={classes.crossIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
