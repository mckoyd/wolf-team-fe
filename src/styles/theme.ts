import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface CommonColors {
    midnightGreen: string;
    lightCoral: string;
    raptureBlue: string;
    policeBlue: string;
    deepJungleGreen: string;
    sacramentoStateGreen: string;
    darkGreen: string;
  }

  interface TypographyVariants {
    h1Large: CSSProperties;
    h1Small: CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Large?: CSSProperties;
    h1Small?: CSSProperties;
  }
}

export const midnightGreen = "#014E56";
export const lightCoral = "#F67E7E";
export const raptureBlue = "#79C8C7";
export const policeBlue = "#2C6269";
export const deepJungleGreen = "#004047";
export const sacramentoStateGreen = "#012F34";
export const darkGreen = "#002529";

const theme: Theme = createTheme({
  palette: {
    common: {
      midnightGreen,
      lightCoral,
      raptureBlue,
      policeBlue,
      deepJungleGreen,
      sacramentoStateGreen,
      darkGreen,
    },
  },

  typography: {
    h1Large: {
      fontFamily: "Livvic",
      fontSize: "6.25em",
      fontWeight: 700,
      lineHeight: "100%",
      color: darkGreen,
    },
    h1Small: {
      fontFamily: "Livvic",
      fontSize: "4em",
      fontWeight: 700,
      lineHeight: "88%",
      color: darkGreen,
    },
    h2: {
      fontFamily: "Livvic",
      fontSize: "3em",
      fontWeight: 700,
      lineHeight: "100%",
      color: darkGreen,
    },
    h3: {
      fontFamily: "Livvic",
      fontSize: "1.125em",
      lineHeight: "156%",
      fontWeight: 700,
      color: darkGreen,
    },
    body1: {
      fontFamily: "Livvic",
      fontSize: "1.125em",
      lineHeight: "156%",
      fontWeight: 600,
      color: darkGreen,
    },
    body2: {
      fontFamily: "Livvic",
      fontSize: "0.9375em",
      lineHeight: "167%",
      fontWeight: 600,
      color: darkGreen,
    },
  },
});

export default theme;
