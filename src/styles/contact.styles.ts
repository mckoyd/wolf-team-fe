import { tss } from "tss-react/mui";

export const useContactStyles = tss.create(({ theme }) => ({
  contactContainer: {
    background: theme.palette.common.midnightGreen,
  },
  qualifications: {
    padding: "2em 1em",
    gap: "2em",
  },
  qualificationContainer: {
    gap: "1.5em",
    textAlign: "center",
    justifyContent: "center",
  },
  qualificationIcon: {
    width: "30%",
  },
  qualificationDescription: {
    color: theme.palette.common.white,
    textAlign: "left",
    width: "70%",
  },
}));
