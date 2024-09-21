"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  children: React.ReactNode;
  spaceBetween: number;
  breakpoints: any;
  navigationFlag: boolean;
}

const SwiperSection = ({
  children,
  spaceBetween,
  breakpoints,
  navigationFlag,
}: Props) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      navigation={navigationFlag}
      loop={true}
      modules={[Navigation]}
      breakpoints={breakpoints}
      className="swiper-section"
    >
      {children}
    </Swiper>
  );
};

export default SwiperSection;
