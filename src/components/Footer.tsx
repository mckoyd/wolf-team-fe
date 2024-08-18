import React from "react";
import { Grid, Typography } from "@mui/material";

import { ReactComponent as FooterLogo } from "../assets/images/footer-logo.svg";
import { useFooterStyles } from "../styles/footer.styles";
import { socialMediaIcons } from "../config/home.config";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { classes } = useFooterStyles();

  return (
    <Grid container direction={"column"} className={classes.footer}>
      <FooterLogo />
      <Grid container className={classes.footerLinks}>
        <Typography
          variant="body2"
          className={classes.footerLink}
          onClick={() => navigate("/")}
        >
          home
        </Typography>
        <Typography
          variant="body2"
          className={classes.footerLink}
          onClick={() => navigate("/about")}
        >
          about
        </Typography>
      </Grid>
      <Grid container direction="column" className={classes.locationContainer}>
        <Typography variant="body2" className={classes.greyedText}>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </Typography>
      </Grid>
      <Grid container className={classes.socialMediaIcons}>
        {socialMediaIcons.map((Icon, index: number) => (
          <Icon key={`${Icon.name}-${index}`} />
        ))}
      </Grid>

      <Typography variant="body2" className={classes.greyedText}>
        Copyright 2020. All Rights Reserved
      </Typography>
    </Grid>
  );
};

export default Footer;
