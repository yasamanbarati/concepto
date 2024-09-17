import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons";
import { Box, styled } from "@mui/material";

const SocialIconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
  width: "100%",
  "& svg ": {
    "& path": {
      fill: theme.palette.neutral.main,
      transition: "0.8s ease",
    },
    "&:hover path": {
      fill: theme.palette.secondary.main,
      boxShadow: `0px 4px 6px ${theme.palette.secondary.light}`,
    },
  },
}));
export const FooterContentConnectionsSocialIcons = () => {
  return (
    <SocialIconsBox
      sx={{ justifyContent: { xs: "space-between", md: "flex-start" } }}
    >
      <TwitterIcon />
      <InstagramIcon />
      <LinkedinIcon />
      <FacebookIcon />
    </SocialIconsBox>
  );
};
