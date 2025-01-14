import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHomeStyles } from "../styles/home.styles";

import { ReactComponent as HeroBg } from "../assets/images/bg-pattern-home-2.svg";
import { ReactComponent as HighlightsBg } from "../assets/images/bg-pattern-home-3.svg";
import { ReactComponent as TestimonialsTopBg } from "../assets/images/bg-pattern-home-4-about-3.svg";
import { ReactComponent as TestimonialBottomBg } from "../assets/images/bg-pattern-home-5.svg";

import HighlightCard from "../components/HighlightCard";
import {
  highlightCards,
  highlightCardTitle,
} from "../config/highlightCard.config";
import { ICardDataResponse, IHightlightCard } from "../interfaces";
import {
  homeHeroSubtitle,
  homeHeroTitle,
  homeHeroTitleSpan,
} from "../config/home.config";
import {
  getTestimonialCards,
  testimonialSectionTitle,
  testimonialSectionTitleSpan,
} from "../config/testimonialCard.config";
import TestimonialCard from "../components/TestimonialCard";
import ReadySection from "../components/ReadySection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
  const { classes } = useHomeStyles();

  const [testimonialCards, setTestimonialCards] = useState<
    Pick<
      ICardDataResponse,
      "fullName" | "imageUrl" | "jobTitle" | "description"
    >[]
  >([]);

  const generateTestimonialCards = async () => {
    const cards = await getTestimonialCards();
    setTestimonialCards(cards);
  };

  useEffect(() => {
    generateTestimonialCards();
  }, []);

  return (
    <Grid container className={classes.homeContainer}>
      {/* Hero Section */}
      <HeroSection
        heroTitle={homeHeroTitle}
        heroTitleSpan={homeHeroTitleSpan}
        heroSubtitle={homeHeroSubtitle}
        HeroBg={HeroBg}
      />

      {/* Highlights Section */}
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

      {/* Testimonials Section */}
      {testimonialCards.length === 0 ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <Grid
          container
          direction="column"
          className={classes.testimonialsSection}
        >
          <TestimonialsTopBg className={classes.testimonialsTopBgIcon} />
          <Grid
            container
            direction="column"
            className={classes.testimonialsContainer}
          >
            <Typography
              variant="h2"
              className={classes.testimonialSectionTitle}
            >
              {testimonialSectionTitle}{" "}
              <span className={classes.testimonialSectionTitleSpan}>
                {testimonialSectionTitleSpan}
              </span>
            </Typography>
            <Grid
              container
              direction="column"
              className={classes.testimonialCards}
            >
              {testimonialCards.map(
                (
                  { imageUrl, fullName, jobTitle, description },
                  index: number
                ) => (
                  <TestimonialCard
                    imageUrl={imageUrl}
                    fullName={fullName}
                    jobTitle={jobTitle}
                    description={description}
                    key={`${fullName}-${index}`}
                  />
                )
              )}
            </Grid>
          </Grid>
          <TestimonialBottomBg className={classes.testimonialsBottomBgIcon} />
        </Grid>
      )}

      {/* Ready Section */}
      <ReadySection />

      {/* Footer */}
      <Footer />
    </Grid>
  );
};

export default Home;
