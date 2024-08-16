import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  headerContainer: {
    background: theme.palette.common.midnightGreen,
    padding: "2em 1.5em",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
