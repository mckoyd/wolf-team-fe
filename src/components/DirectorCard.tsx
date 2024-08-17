import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { ICardDataResponse } from "../interfaces";
import { useDirectorCardStyles } from "../styles/directorCard.styles";
import { ReactComponent as AddIcon } from "../assets/images/icon-cross.svg";

const DirectorCard: React.FC<
  Pick<ICardDataResponse, "fullName" | "imageUrl" | "jobTitle" | "description">
> = ({ fullName, imageUrl, description, jobTitle }) => {
  const { classes } = useDirectorCardStyles();

  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMoreBtn = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.directorCardContainer}
    >
      <img
        src={imageUrl}
        alt={`avatar of ${fullName}`}
        className={classes.avatar}
      />
      <Typography variant="h3" className={classes.fullName}>
        {fullName}
      </Typography>
      <Typography variant="body2" className={classes.jobTitle}>
        {jobTitle}
      </Typography>
      {showMore && (
        <Typography variant="body2" className={classes.moreInfo}>
          {description}
        </Typography>
      )}
      <IconButton onClick={handleShowMoreBtn} className={classes.moreInfoBtn}>
        <AddIcon />
      </IconButton>
    </Grid>
  );
};

export default DirectorCard;
