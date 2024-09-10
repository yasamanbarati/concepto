import { ReactNode } from "react";

import { Typography, styled } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
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

const TitleSection = ({ title, children }: Props) => {
  return (
    <div>
      <TitlesSectionDiv>
        <Typography
          component="h3"
          variant="h5"
          color="gray"
          whiteSpace="nowrap"
          mx={1}
        >
          {title}
        </Typography>
        <hr />
      </TitlesSectionDiv>
      {children}
    </div>
  );
};

export default TitleSection;
