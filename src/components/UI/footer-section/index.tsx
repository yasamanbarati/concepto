"use client";
import { styled } from "@mui/material";
import FooterFootnoteSection from "./footer-";
import FooterMainSection from "./footer-main-section";

const FooterSection = styled("div")(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.palette.primary.light + "52"}, ${
    theme.palette.primary.dark + "d6"
  }),url("/images/Tooltip.png")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "487px",
  position: "relative",
  marginTop: "160px",
  paddingTop: "60px",
  "::before": {
    content: `""`,
    position: "absolute",
    width: "100%",
    height: "100px",
    backgroundColor: theme.palette.white,
    borderRadius: "0 0 50% 50%",
    top: "-40px",
  },
  [theme.breakpoints.down("tablet")]: {
    marginTop: "80px",
  },
}));

const Footer = () => {
  return (
    <FooterSection>
      <FooterMainSection />
      <FooterFootnoteSection />
    </FooterSection>
  );
};

export default Footer;
