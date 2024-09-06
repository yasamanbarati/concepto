"use client";
import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

export const theme = createTheme({
  palette: palette,
  spacing: 4, //theme.spacing(2); // `${4 * 2}px` = '8px'
  breakpoints: {
    values: {
      //به بالا
      xs: 0,
      mobileS: 320,
      mobileM: 375,
      mobileL: 485,
      sm: 576,
      tabletM: 667,
      tabletL: 768,
      md: 884,
      lg: 1200,
      xl: 1440,
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
          gap: "10px",
          borderRadius: "8px",
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
            fontSize: "0.875rem",
            padding: "8px 24px",
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
    h1: {
      fontSize: "2.75rem", //44
      lineHeight: "140%",
    },
    h2: {
      fontSize: "2.5rem", //40
      lineHeight: "140%",
      fontWeight: "700",
    },
    h3: {
      fontSize: "2rem", //32
      lineHeight: "140%",
      fontWeight: "700",
    },
    h4: {
      fontSize: "1.5rem", //24
      lineHeight: "140%",
      fontWeight: "700",
    },
    h5: {
      fontSize: "1.25rem", //20
      lineHeight: "140%",
      fontWeight: "700",
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
      // display: '-webkit-box',
      // WebkitLineClamp:'1',
      // WebkitBoxOrient:'vertical',
      // overflow:'hidden',
      // textOverflow:'ellipsis',
      // textAlign:'start',
    },
    body2: {
      fontSize: "0.875rem", //14
      lineHeight: "180%",
      fontWeight: "500",
      // display: '-webkit-box',
      // WebkitLineClamp:'3',
      // WebkitBoxOrient:'vertical',
      // overflow:'hidden',
      // textOverflow:'ellipsis',
      // textAlign:'center',
    },
    subtitle1: {
      fontSize: "0.75rem", //12
      lineHeight: "180%",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "0.625rem", //10
      lineHeight: "180%",
      fontWeight: "400",
    },
  },
});
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    mobileS: true;
    mobileM: true;
    mobileL: true;
    sm: true;
    tabletM: true;
    tabletL: true;
    md: true;
    lg: true;
    xl: true;
  }
}
