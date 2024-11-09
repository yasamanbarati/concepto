"use client";
import Image from "next/image";
import { Grid2, styled } from "@mui/material";

import { ImportantNewsProps } from "@/services/servers/type";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const CardBox = styled(Grid2)(({ theme }) => ({
  position: "relative",
  "& img": {
    position: "relative!important",
    borderRadius: "16px",
  },
  "& p": {
    position: "absolute",
    padding: "16px",
    color: theme.palette.white,
    boxShadow: `inset 0 0 100px 0px ${theme.palette.neutral.dark}`,
    borderRadius: " 0 0 16px 16px",
  },
}));

const ImportantNewsCard = ({
  image,
  description,
  size,
}: ImportantNewsProps) => {
  return (
    <CardBox size={size}>
      <Image alt="news" src={image as string | StaticImport} fill />
      <p>{description}</p>
    </CardBox>
  );
};

export default ImportantNewsCard;
