import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useReadySectionStyles } from "../styles/readySection.styles";
import { ReactComponent as ReadySectionBg } from "../assets/images/bg-pattern-home-6-about-5.svg";

const ReadySection: React.FC = () => {
  const navigate = useNavigate();

  const { classes } = useReadySectionStyles();

  return (
    <Grid container direction="column" className={classes.readyContainer}>
      <Grid container direction="column">
        <Typography variant="h2" className={classes.readyTitle}>
          Ready to get started?
        </Typography>
        <Button
          onClick={() => navigate("/contact")}
          className={classes.contactUsBtn}
        >
          <Typography component={"span"} variant="body2" fontSize="1.125em">
            contact us
          </Typography>
        </Button>
      </Grid>
      <ReadySectionBg className={classes.readySectionBg} />
    </Grid>
  );
};

export default ReadySection;
