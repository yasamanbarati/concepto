"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { initializeAppData } from "@/services/servers";

export const ReduxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  initializeAppData();
  return <Provider store={store}>{children}</Provider>;
};
