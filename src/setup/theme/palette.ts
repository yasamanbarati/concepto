"use client";

import { PaletteColor, PaletteColorOptions } from "@mui/material";

export const palette = {
  neutral: {
    dark: "#AEB2C0", //Gray-3
    main: "#CBCED7", //Gray-2
    light: "#E9EAEE", //Gray-1
  },
  primary: {
    main: "#0D6EFD",
    light: "#013075",
    contrastText: "#fff",
    dark: "#00183B",
  },
  secondary: {
    main: "#FFC51A",
    light: "#FFECB3",
  },
  error: {
    main: "#DC3545",
    light: "#FFEEF0",
  },
  success: {
    main: "#28A745",
    light: "#D8FFE1",
  },
  warning: {
    main: "#FFBE00",
    light: "#FFF1C9",
  },
  black: {
    main: "#2E303B", //Gray-8
    dark: "#444859", //Gray-7
    light: "#5B6176", //Gray-6
  },
  blue: {
    light: "#E4EFFF",
    main: "#79AEFE",
    dark: "#287EFD",
  },
  gray: "#737993", //Gray-5
  gray_4: "#9095AA", //Gray-4
  white: "#fff",
  black_dark: "#000",
};
declare module "@mui/material/styles" {
  interface Palette {
    neutral: PaletteColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    black: PaletteColor;
    blue: PaletteColor;
    gray: string;
    white: string;
    black_dark: string;
    gray_4: string;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    black?: PaletteColorOptions;
    blue?: PaletteColorOptions;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    primary: true;
    secondary: true;
    error: true;
    success: true;
    black: true;
    blue: true;
    white: true;
    gray: true;
  }
}
