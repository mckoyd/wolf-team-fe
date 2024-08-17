import { tss } from "tss-react/mui";

export const useHightlightCard = tss.create(({ theme }) => ({
  highlightCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5em",
  },
  highlightCardTitle: {
    color: theme.palette.common.lightCoral,
    textAlign: "center",
  },
  highlightCardDescription: {
    color: theme.palette.common.white,
    textAlign: "center",
    opacity: "0.8",
  },
}));
