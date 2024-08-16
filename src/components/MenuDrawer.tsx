import { Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as CloseIcon } from "../assets/images/icon-close.svg";
import { useMenuDrawerStyles } from "../styles/menuDrawer.styles";
import { IMenuDrawer, IMenuNavLink } from "../interfaces";
import {
  contactBtnLabel,
  menuDrawerAnchor,
  menuNavLinks,
} from "../config/menuDrawer.config";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MobileDrawerBg } from "../assets/images/bg-pattern-about-1-mobile-nav-1.svg";

const MenuDrawer: React.FC<IMenuDrawer> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();

  const { classes } = useMenuDrawerStyles();

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Drawer
      anchor={menuDrawerAnchor}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Grid container direction="column" className={classes.drawerContainer}>
        <IconButton className={classes.closeIconBtn} onClick={handleMenuClose}>
          <CloseIcon />
        </IconButton>
        <Grid container direction={"column"} className={classes.menuNavLinks}>
          {menuNavLinks.map(
            ({ label, relativeLink }: IMenuNavLink, index: number) => (
              <Button
                onClick={() => {
                  navigate(relativeLink);
                  setIsMenuOpen(false);
                }}
                className={classes.navLinkBtn}
              >
                <Typography
                  variant="body1"
                  component={"span"}
                  className={classes.navLinkLabel}
                >
                  {label}
                </Typography>
              </Button>
            )
          )}
        </Grid>

        <Button
          className={classes.contactBtn}
          onClick={() => {
            navigate("/contact");
            setIsMenuOpen(false);
          }}
        >
          <Typography component={"span"} className={classes.navLinkLabel}>
            {contactBtnLabel}
          </Typography>
        </Button>

        <MobileDrawerBg className={classes.mobileBg} />
      </Grid>
    </Drawer>
  );
};

export default MenuDrawer;
