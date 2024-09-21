"use client";

import { styled } from "@mui/material";

const FooterFootnote = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  textAlignLast: "center",
  height: "60px",
  padding: "24px 8px",
  [theme.breakpoints.down("md")]: {
    padding: "16px 8px",                            
  },
  "& span": {
    color: theme.palette.white,
    textAlign: "center",
    fontSize: "1rem", //16
    lineHeight: "180%",
    fontWeight: "500",
  },
}));
const FooterFootnoteSection = () => {
  return (
    <FooterFootnote>
      <span>© ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است.</span>
    </FooterFootnote>
  );
};

export default FooterFootnoteSection;
