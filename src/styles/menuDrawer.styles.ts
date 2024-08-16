import { tss } from "tss-react/mui";

export const useMenuDrawerStyles = tss.create(({ theme }) => ({
  drawerContainer: {
    width: "16em",
    background: theme.palette.common.policeBlue,
    height: "100%",
    padding: "3em 1.5em",
    gap: "1em",
  },
  closeIconBtn: {
    alignSelf: "flex-end",
  },
  menuNavLinks: {
    padding: "0 1em",
  },
  navLinkBtn: {
    alignSelf: "flex-start",
  },
  navLinkLabel: {
    textTransform: "none",
    color: theme.palette.common.white,
  },
  contactBtn: {
    border: `2px solid ${theme.palette.common.white}`,
    borderRadius: "1.5em",
    margin: "1em",
  },
  mobileBg: {
    position: "absolute",
    bottom: 0,
    left: "10em",
  },
}));
