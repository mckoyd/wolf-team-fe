import { tss } from "tss-react/mui";

export const useHeroSectionStyles = tss.create(({ theme }) => ({
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
  heroTitleSpan: {
    color: theme.palette.common.lightCoral,
  },
  heroBody: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: "0 1em",
  },
  heroBg: {
    margin: "4em auto 0 auto",
  },
  heroBgRight: {
    padding: "6.5em 0 0 6.5em",
    margin: "-6em 0 0 auto",
  },
}));
