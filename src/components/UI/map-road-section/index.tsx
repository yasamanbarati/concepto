"use client";
import React from "react";
import { styled } from "@mui/material";
import { MapRoad } from "@/services/servers/mock";

const MapRoadDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",
}));
const MapRoadCard = styled("div")(() => ({
    width:'392px',
    height:'269px',
  }));
const MapRoadSection = () => {
  return (
    <MapRoadDiv>
      {MapRoad.map((item, index) => {
        return <MapRoadCard></MapRoadCard>;
      })}
    </MapRoadDiv>
  );
};

export default MapRoadSection;
