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
  directorCardContainer: {
    background: theme.palette.common.sacramentoStateGreen,
    paddingTop: "2em",
  },
  fullName: {
    color: theme.palette.common.raptureBlue,
    textAlign: "center",
  },
  moreInfo: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: "0.5em 3em 0 3em",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
    padding: "1em 0",
  },
  crossBtn: {
    borderRadius: "100%",
    background: theme.palette.common.raptureBlue,
    width: "2.5em",
    height: "2.5em",
    margin: "1em auto -1em auto",
    "&:hover": {
      background: theme.palette.common.raptureBlue,
    },
  },
  crossIcon: {
    "& path": {
      fill: theme.palette.common.sacramentoStateGreen,
    },
  },
}));
