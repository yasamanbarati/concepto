"use client";
import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

export const theme = createTheme({
  palette: palette,
  spacing: 4, //theme.spacing(2); // `${4 * 2}px` = '8px'
  breakpoints: {
    values: {
      xs: 0,
      mobileS: 345,
      sm: 425,
      tabletS: 500,
      tabletM: 667,
      tablet: 768,
      md: 940,
      laptop: 1025,
      xl: 1200,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          fontFamily: "IRANSans",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "180%",
          textTransform: "lowercase",
          gap: "8px",
          borderRadius: "12px",
          textWrap: "nowrap",
        },
      },
      variants: [
        {
          props: {
            size: "large",
          },
          style: {
            fontSize: "1em",
            padding: "10px 24px",
            width: "100%",
          },
        },
        {
          props: {
            size: "medium",
          },
          style: {
            height: "48px",
            fontSize: "1rem",
            padding: "0 16px",
            "@media (max-width: 940px)": {
              fontSize: "0.76rem!important",
              padding: "0 12px!important",
              gap: "4px!important",
              borderRadius: "8px!important",
            },
          },
        },
        {
          props: {
            size: "small",
          },
          style: {
            fontSize: "0.75rem",
            padding: "8px 12px",
          },
        },
      ],
    },
  },
  typography: {
    h5: {
      fontSize: "1.25rem", //20
      lineHeight: "140%",
      fontWeight: "700",
      "@media (max-width: 667px)": {
        fontSize: "1rem",
        lineHeight: "180%",
      },
    },
    h6: {
      fontSize: "1.125rem", //18
      lineHeight: "140%",
      fontWeight: "700",
    },
    body1: {
      fontSize: "1rem", //16
      lineHeight: "180%",
      fontWeight: "500",
      "@media (max-width: 667px)": {
        fontSize: "0.86rem",
        lineHeight: "180%",
        whiteSpace: "nowrap",
      },
      // display: '-webkit-box',
      // WebkitLineClamp:'1',
      // WebkitBoxOrient:'vertical',
      // overflow:'hidden',
      // textOverflow:'ellipsis',
      // textAlign:'start',
    },
  },
});
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    lg: false;
    xs: true;
    mobileS: true;
    sm: true;
    tabletS: true;
    tabletM: true;
    tablet: true;
    md: true;
    laptop: true;
    xl: true;
  }
}
