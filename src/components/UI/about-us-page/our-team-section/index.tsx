"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { styled, Typography } from "@mui/material";

import SwiperSection from "@/components/swiper";
import { OurTeam } from "@/services/servers/mock";
import { OurTeamProps } from "@/services/servers/type";

const MainDiv = styled("div")(({ theme }) => ({
  position: "relative",
  height: "560px",
  marginBottom: "30px",
  [theme.breakpoints.down("tabletM")]: {
    height: "485px",
  },
  "& .swiper.swiper-section": {
    minHeight: "430px",
    "& .swiper-wrapper": {
      marginTop: "90px",
      "& .swiper-slide.swiper-slide-visible": {
        transform: "scale(0.8)!important",
        right: "-24px",
      },
      "& .swiper-slide.swiper-slide-visible.swiper-slide-active": {
        transform:
          "translate3d(0px, 0px, -20.2555px) rotateX(0deg) rotateY(0) scale(1)!important",
      },
      "& .swiper-slide": {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "0 auto",
        minHeight: "535px",
        width: "390px!important",
        borderRadius: "16px",
        backgroundColor: theme.palette.blue.light,
        "& img": {
          height: "320px!important",
        },
        // "& div": {
        //   height: "400px!important",
        //   position: "absolute",
        // },
        //
      },
    },
  },
}));
const CardBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  width: "100%",
  height: "60%",
  "& h4": {
    height: "60px",
    width: "100%",
    backgroundColor: theme.palette.blue.main + "b5",
    textAlign: "center",
    alignContent: "center",
  },
}));
const CardInformaiton = styled("div")(({ theme }) => ({}));

const OurTeamSection = () => {
  const swiperProps = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto" as const,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  };

  return (
    <MainDiv>
      <SwiperSection
        navigationFlag={false}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        props={swiperProps}
      >
        {OurTeam.map((item: OurTeamProps, index) => {
          return (
            <SwiperSlide key={index}>
              <Image alt={item.name} src={item.image} fill />
              <CardBox>
                <Typography variant="body1" component="h4">
                  {item.position}
                </Typography>
                <CardInformaiton>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </CardInformaiton>
              </CardBox>
            </SwiperSlide>
          );
        })}
      </SwiperSection>
    </MainDiv>
  );
};

export default OurTeamSection;
