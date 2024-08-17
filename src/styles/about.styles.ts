import { tss } from "tss-react/mui";

export const useAboutStyles = tss.create(({ theme }) => ({
  aboutContainer: {
    background: theme.palette.common.midnightGreen,
  },
  heroContainer: {
    padding: "1em",
    gap: "1em",
  },
  heroTitle: {
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: "2.5em",
    padding: "0 1em",
  },
}));
