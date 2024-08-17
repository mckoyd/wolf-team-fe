import { tss } from "tss-react/mui";

export const useReadySectionStyles = tss.create(({ theme }) => ({
  readyContainer: {
    background: theme.palette.common.lightCoral,
  },
  readyTitle: {
    fontSize: "2em",
    textAlign: "center",
    padding: "2.5em 2.5em 0.5em 2.5em",
  },
  contactUsBtn: {
    width: "40%",
    textTransform: "none",
    borderRadius: "1.5em",
    border: "2px solid #012F34",
    margin: "0 auto 4em auto",
  },
  readySectionBg: {
    marginTop: "-7em",
    paddingTop: "1.5em",
  },
}));
