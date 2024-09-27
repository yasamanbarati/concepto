"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { styled } from "@mui/material";

interface Props {
  children: React.ReactNode;
  spaceBetween: number;
  breakpoints: any;
  navigationFlag: boolean;
}

const SwiperSlide = styled(Swiper)(({ theme }) => ({
  width: "-webkit-fill-available",
  marginBottom: "160px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "96px",
  },
  "& .swiper-button-prev, .swiper-button-next": {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: theme.palette.white,
    boxShadow: `0 5px 50px 0 ${theme.palette.black_dark + "5"}`,
    "&::after": {
      fontSize: "20px",
      color: theme.palette.black_dark,
    },
  },
  "& .swiper-button-prev": {
    right: "-20px!important",
  },
  "& .swiper-button-next": {
    left: "-20px!important",
  },
}));

const SwiperSection = ({
  children,
  spaceBetween,
  breakpoints,
  navigationFlag,
}: Props) => {
  return (
    <SwiperSlide
      spaceBetween={spaceBetween}
      navigation={navigationFlag}
      loop={true}
      modules={[Navigation]}
      breakpoints={breakpoints}
      className="swiper-section"
    >
      {children}
    </SwiperSlide>
  );
};

export default SwiperSection;
