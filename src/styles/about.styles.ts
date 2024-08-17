import { tss } from "tss-react/mui";

export const useAboutStyles = tss.create(({ theme }) => ({
  aboutContainer: {
    background: theme.palette.common.midnightGreen,
  },
  directorSection: {
    background: theme.palette.common.deepJungleGreen,
    overflow: "hidden",
  },
  directorSectionBG: {
    margin: "-6.25em 0 0 -6.25em",
  },
  directorSectionTitle: {
    color: theme.palette.common.white,
    textAlign: "center",
    marginBottom: "1.75em",
  },
  directorCards: {
    padding: "0 1em 4em 1em",
    gap: "3em",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    margin: "3em auto",
    color: theme.palette.common.lightCoral,
    width: "5em !important",
    height: "5em !important",
  },
}));
