import { tss } from "tss-react/mui";

export const useHomeStyles = tss.create(({ theme }) => ({
  homeContainer: {
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
  highlightsContainer: {
    background: theme.palette.common.sacramentoStateGreen,
  },
  highlightsTitleContainer: {
    gap: "2em",
    width: "65%",
    padding: "4em 1em",
  },
  highlightsDivider: {
    height: "0.25em",
    width: "30%",
    background: theme.palette.common.lightCoral,
  },
  highlightsTitle: {
    color: theme.palette.common.white,
  },
  highlightsBg: {
    width: "35%",
    paddingLeft: "2em",
  },
  highlightCards: {
    padding: "1em 1em 4em 1em",
    gap: "3em",
  },
  testimonialsSection: {
    background: theme.palette.common.deepJungleGreen,
  },
  testimonialsTopBgIcon: {},
  testimonialsContainer: {
    padding: "3em 1em",
    justifyContent: "center",
  },
  testimonialSectionTitle: {
    color: theme.palette.common.white,
    fontSize: "2.25em",
    textAlign: "center",
  },
  testimonialSectionTitleSpan: {
    color: theme.palette.common.raptureBlue,
  },
  testimonialCards: {
    padding: "4em 1em 1em 1em",
    gap: "3em",
  },
  testimonialsBottomBgIcon: {
    alignSelf: "flex-end",
  },
  loader: {
    margin: "3em auto",
    color: theme.palette.common.lightCoral,
    width: "5em !important",
    height: "5em !important",
  },
}));
