import { tss } from "tss-react/mui";

export const useFooterStyles = tss.create(({ theme }) => ({
  footer: {
    background: theme.palette.common.darkGreen,
    padding: "4em 1em",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
  },
  footerLinks: {
    justifyContent: "center",
    gap: "2em",
  },
  footerLink: {
    color: theme.palette.common.white,
  },
  locationContainer: {},
  greyedText: {
    color: theme.palette.common.white,
    opacity: 0.6,
    textAlign: "center",
  },
  socialMediaIcons: {
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
    margin: "2em 0 1em 0",
  },
}));
