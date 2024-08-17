import { tss } from "tss-react/mui";

export const useDirectorCardStyles = tss.create(({ theme }) => ({
  directorCardContainer: {
    background: theme.palette.common.sacramentoStateGreen,
    paddingTop: "2em",
  },
  avatar: {
    width: "6em",
    height: "6em",
    borderRadius: "100%",
    border: "2px solid #C4FFFE",
    margin: "1em auto",
  },
  fullName: {
    color: theme.palette.common.raptureBlue,
    textAlign: "center",
  },
  jobTitle: {
    fontWeight: 500,
    fontStyle: "italic",
    color: theme.palette.common.white,
    textAlign: "center",
  },
  moreInfoBtn: {
    borderRadius: "100%",
    background: theme.palette.common.lightCoral,
    width: "2.5em",
    height: "2.5em",
    margin: "1em auto -1em auto",
    "&:hover": {
      background: theme.palette.common.lightCoral,
    },
  },
  moreInfo: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: "1em 1em 0 1em",
  },
}));
