"use client";
import React from "react";
import { Grid2, styled, Typography } from "@mui/material";
import { MapRoad } from "@/services/servers/mock";
import Image from "next/image";

const MapRoadDiv = styled(Grid2)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "160px",
  [theme.breakpoints.down("tablet")]: {
    paddingTop: "32px",
    marginBottom: "62px",
  },
}));
const MapRoadCard = styled(Grid2)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: `''`,
    position: "absolute",
    width: "100%",
    height: "137px",
    right: 0,
    bottom: "37px",
    borderRadius: "16px",
    zIndex: "-1",
    [theme.breakpoints.down("tabletM")]: {
      height: "84px",
    },
  },
  "&:nth-child(1)": {
    "&::before": {
      backgroundColor: theme.palette.blue.light,
    },
  },
  "&:nth-child(2)": {
    "&::before": {
      backgroundColor: theme.palette.blue.main,
    },
  },
  "&:nth-child(3)": {
    "&::before": {
      backgroundColor: theme.palette.blue.dark,
    },
  },
  "& img": {
    backgroundColor: theme.palette.neutral.light,
    borderRadius: "16px 16px 0",
    [theme.breakpoints.down("tabletM")]: {
      width: "200px",
      height: "129px",
    },
  },
}));
const MapRoadSection = () => {
  return (
    <MapRoadDiv container spacing={6}>
      {MapRoad.map((item, index) => {
        return (
          <MapRoadCard size={{ xs: 12, md: 4 }}>
            <Image
              src={"/images/Button container.png"}
              alt="road map card image"
              width={307}
              height={225}
            />
            <Typography variant="h6" component="h5">
              {item}
            </Typography>
          </MapRoadCard>
        );
      })}
    </MapRoadDiv>
  );
};

export default MapRoadSection;
