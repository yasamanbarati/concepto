"use client";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { styled } from "@mui/material";

interface CoverflowEffect {
  rotate: number;
  stretch: number;
  depth: number;
  modifier: number;
  slideShadows: boolean;
}

interface SwiperProps {
  effect: string;
  grabCursor: boolean;
  centeredSlides: boolean;
  slidesPerView: number | "auto" | undefined;
  coverflowEffect: CoverflowEffect;
}

interface Props {
  children: React.ReactNode;
  spaceBetween?: number;
  breakpoints?: any;
  navigationFlag: boolean;
  props?: SwiperProps; // Fixed here
}

const SwiperSlide = styled(Swiper)(({ theme }) => ({
  width: "100%", // Use "100%" instead of "-webkit-fill-available"
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
  props,
}: Props) => {
  return (
    <SwiperSlide
      spaceBetween={spaceBetween}
      navigation={navigationFlag}
      loop={true}
      modules={[Navigation, EffectCoverflow]}
      breakpoints={breakpoints}
      className="swiper-section"
      {...(props || {})}
    >
      {children}
    </SwiperSlide>
  );
};

export default SwiperSection;
