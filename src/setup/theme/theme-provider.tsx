"use client";
import React from "react";
import { theme } from ".";
import { CssBaseline, ThemeProvider as Provider} from "@mui/material";

export const ThemeProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};
