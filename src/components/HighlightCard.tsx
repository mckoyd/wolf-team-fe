import { Grid, Typography } from "@mui/material";
import React from "react";
import { useHightlightCard } from "../styles/highlightCard.styles";
import { IHightlightCard } from "../interfaces";

const HighlightCard: React.FC<IHightlightCard> = ({
  Icon,
  title,
  description,
}) => {
  const { classes } = useHightlightCard();

  return (
    <Grid
      container
      direction="column"
      className={classes.highlightCardContainer}
    >
      <Icon />
      <Typography variant="h3" className={classes.highlightCardTitle}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.highlightCardDescription}>
        {description}
      </Typography>
    </Grid>
  );
};

export default HighlightCard;
