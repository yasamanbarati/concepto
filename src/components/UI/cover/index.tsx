"use client";
import CustomizedButton from "@/components/button";
import { BoltIcon, ChevronLeft } from "@/components/icons";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";

interface InvestmentInfoProps {
  amount: number;
  label: string;
}

const CoverBox = styled("div")(({ theme }) => ({
  marginTop: "95px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("tablet")]: {
    marginTop: "32px",
  },
  "&::after": {
    content: `''`,
    position: "absolute",
    width: "160px",
    height: "160px",
    right: "0",
    top: "-20px",
    backgroundColor: theme.palette.primary.main,
    filter: "blur(145px)",
    borderRadius: "50%",
  },
  "&::before": {
    content: `''`,
    position: "absolute",
    width: "160px",
    height: "160px",
    left: "0",
    bottom: "-20px",
    backgroundColor: theme.palette.primary.main,
    filter: "blur(145px)",
    borderRadius: "50%",
    transition: "ease 0.8s",
  },
}));
const CoverContent = styled("div")(({ theme }) => ({
  "& h2": {
    fontSize: "2.75rem",
    fontWeight: "700",
    lineHeight: "150%",
    color: theme.palette.primary.dark,
    textAlign: "center",
  },
  "& p": {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "180%",
    color: theme.palette.primary.light,
    textAlign: "center",
    marginTop: "24px",
  },
  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginTop: "32px",
    "& button.MuiButtonBase-root": {
      width: "auto",
      "& span": {
        margin: 0,
      },
      [theme.breakpoints.down("tablet")]: {
        fontSize: "0.76rem",
        minWidth: "125px",
        height: "32px",
      },
    },
  },
  [theme.breakpoints.down("tablet")]: {
    "& h2": {
      fontSize: "1.5rem", 
    },
    "& p": {
      fontSize: "0.86rem",
    },
  },
}));
const CoverImagesBox = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "56px",
  "& img:nth-child(2),img:nth-child(3)": {
    position: "absolute",
  },
  "& img:nth-child(2)": {
    top: "-94px",
    right: "-104px",
  },
  "& img:nth-child(3)": {
    bottom: "-114px",
    left: "-104px",
  },
  [theme.breakpoints.down("lg")]: {
    "& img:nth-child(1)": {
      width: "700px",
      height: "500px",
    },
    "& img:nth-child(2)": {
      right: "-40px",
      width: "200px",
      height: "400px",
    },
    "& img:nth-child(3)": {
      left: "-60px",
      width: "380px",
      height: "200px",
    },
  },
  [theme.breakpoints.down("tablet")]: {
    "& img:nth-child(1),img:nth-child(3)": {
      display: "none",
    },
    "& img:nth-child(2)": {
      position: "relative",
      top: 0,
      right: 0,
      width: "400px",
      height: "360px",
      //   clipPath: "inset(0 0 200px 0)",
    },
  },
}));
const InvestmentBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "75px",
  marginTop: "160px",
  "& p": {
    fontSize: "2.75rem!important",
    lineHeight: "180%",
    fontWeight: "500",
    position: "relative",
    "&::before": {
      content: `''`,
      position: "absolute",
      width: "85px",
      height: "85px",
      right: "-45px",
      top: "0px",
      backgroundColor: theme.palette.secondary.light,
      borderRadius: "50%",
      zIndex: "-1",
    },
  },
  "& span": {
    fontSize: "1.25rem!important",
    lineHeight: "180%",
    fontWeight: "700",
  },
  [theme.breakpoints.down("lg")]: {
    gap: "55px",
    "& p": {
      fontSize: "2rem!important",
      "&::before": {
        width: "65px",
        height: "65px",
        right: "-35px",
        top: "-4px",
      },
    },
    "& span": {
      fontSize: "1rem!important",
    },
  },
  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
    marginTop: "30px",
  },
}));

const InvestmentInfo: React.FC<InvestmentInfoProps> = ({ amount, label }) => {
  return (
    <p style={{ fontSize: "1.2em", margin: "10px 0" }}>
      +{amount.toLocaleString("fa-IR")}
      <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
        {" " + label}
      </span>
    </p>
  );
};

const CoverSection = () => {
  return (
    <CoverBox>
      <CoverContent>
        <h2>با سرچ کمتر نتیجه بهتر بگیر</h2>
        <p>کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی</p>
        <div>
          <CustomizedButton
            variant="contained"
            size="medium"
            color="primary"
            text="رایگان شروع کن!"
            startIcon={<BoltIcon width="10px" height="18px" />}
          />
          <CustomizedButton
            variant="outlined"
            size="medium"
            color="black"
            text="درباره کانسپتو"
            endIcon={<ChevronLeft width="10px" height="18px" />}
          />
        </div>
      </CoverContent>
      <CoverImagesBox>
        <Image
          src="/images/Image.png"
          alt={"cover Image"}
          width={900}
          height={588}
        />
        <Image
          src="/images/Image (2).png"
          alt={"cover Image"}
          width={287}
          height={465}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/Image (1).png"
          alt={"cover Image"}
          width={447}
          height={279}
          style={{ objectFit: "cover" }}
        />
      </CoverImagesBox>
      <InvestmentBox>
        <InvestmentInfo amount={496} label="سرمایه گذار" />
        <InvestmentInfo amount={11} label="میلیارد تومان سرمایه گذاری" />
        <InvestmentInfo amount={112610} label="شرکت فعال" />
      </InvestmentBox>
    </CoverBox>
  );
};

export default CoverSection;
