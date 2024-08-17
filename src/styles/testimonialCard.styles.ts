import { tss } from "tss-react/mui";

export const useTestimonialCardStyles = tss.create(({ theme }) => ({
  testimonialCardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  testimonialDescription: {
    color: theme.palette.common.white,
    textAlign: "center",
    marginTop: "-1.5em",
  },
  fullName: {
    color: theme.palette.common.raptureBlue,
    marginTop: "1em",
  },
  jobTitle: {
    fontFamily: "Livvic",
    fontSize: "0.8125em",
    fontWeight: 500,
    lineHeight: "138%",
    color: theme.palette.common.white,
    fontStyle: "italic",
  },
  avatar: {
    width: "3.875em",
    height: "3.875em",
    borderRadius: "100%",
    border: "2px solid #C4FFFE",
    marginTop: "1em",
  },
}));
