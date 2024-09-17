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
