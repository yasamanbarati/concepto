import { ReactNode } from "react";

import { Typography, styled } from "@mui/material";
import CustomizedButton from "../button";
import { ChevronLeft } from "../icons";

interface Props {
  title: string;
  children: React.ReactNode;
  textColor: "gray" | "white";
  flag: boolean;
}

const TitlesSectionDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "43px",
  gap: "12px",
  "& hr": {
    color: theme.palette.white,
  },
  "& .MuiButtonBase-root": {
    gap: 0,
    padding: 0,
    color: theme.palette.white,
    "& svg": {
      width: "32px",
      height: "32px",
      "& path": {
        fill: theme.palette.white,
      },
    },
  },
  [theme.breakpoints.down("tablet")]: {
    marginBottom: "35px",
  },
}));

const TitleSection = ({ title, children, textColor, flag }: Props) => {
  return (
    <>
      <TitlesSectionDiv>
        <Typography
          component="h3"
          variant="h5"
          color={textColor}
          whiteSpace="nowrap"
          mx={1}
        >
          {title}
        </Typography>
        <hr style={{ width: flag === false ? "100%" : "0%" }} />
        {flag === true && (
          <CustomizedButton
            size="medium"
            variant="text"
            endIcon={<ChevronLeft />}
            text="مشاهده همه"
          />
        )}
      </TitlesSectionDiv>
      {children}
    </>
  );
};

export default TitleSection;
