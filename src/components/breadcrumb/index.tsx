"use client";

import Link from "next/link";
import { Breadcrumbs, styled, Typography } from "@mui/material";
import { NavigateBefore } from "@mui/icons-material";
import { HomeIcon } from "../icons";

interface Props {
  disabledLink: string;
}
const BreadcrumbsBox = styled(Breadcrumbs)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "4px",
  margin: "24px 0 16px",
  "& a": {
    fontSize: "1rem",
    lineHeight: "180%",
    fontWeight: "500",
    display: "flex",
    alignItems: "baseline",
    gap: "6px",
    color: theme.palette.primary.main,
    "& svg": {
      width: "20px!important",
      height: "17px!important",
    },
  },
}));

const BreadcrumbsSection = ({ disabledLink }: Props) => {
  return (
    <BreadcrumbsBox
      separator={<NavigateBefore fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link color="primary" href="/">
        <HomeIcon />
        خانه
      </Link>
      <Typography color="textDisabled" variant="body1">
        {disabledLink}
      </Typography>
    </BreadcrumbsBox>
  );
};

export default BreadcrumbsSection;
