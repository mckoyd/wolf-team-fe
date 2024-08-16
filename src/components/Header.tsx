import React, { useState } from "react";
import { Drawer, Grid, IconButton, Typography } from "@mui/material";

import { useHeaderStyles } from "../styles/header.styles";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/images/icon-hamburger.svg";
import MenuDrawer from "./MenuDrawer";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  return (
    <Grid container className={classes.headerContainer}>
      <Logo />
      <IconButton onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <MenuDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Grid>
  );
};

export default Header;
