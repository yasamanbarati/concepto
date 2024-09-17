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
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "24px",
  "& svg": {
    width: "50px",
    height: "40px",
  },
  "& hr": {
    width: "100%",
    color: theme.palette.neutral.main,
    marginRight: "21px",
  },
}));

const TitleSection = ({ title, children, textColor, flag }: Props) => {
  return (
    <div>
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
        <hr />
        {flag === true && (
          <CustomizedButton
            size="medium"
            variant="text"
            endIcon={<ChevronLeft width={7} height={12} />}
            text="مشاهده همه"
          />
        )}
      </TitlesSectionDiv>
      {children}
    </div>
  );
};

export default TitleSection;
