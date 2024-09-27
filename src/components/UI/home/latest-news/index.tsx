"use client";
import Image from "next/image";
import { styled } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import SwiperSection from "@/components/swiper";
import { useAppSelector } from "@/setup/store/react-hooks";
import TitleSection from "@/components/title-section";
import { DateIcon } from "@/components/icons";
import { LatestNewsProps } from "@/services/servers/type";

const MainDiv = styled("div")(({ theme }) => ({
  position: "relative",
  height: "560px",
  marginBottom: "30px",
  [theme.breakpoints.down("tabletM")]: {
    height: "485px",
  },
  "& .swiper.swiper-section": {
    minHeight: "430px",
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
      "& .swiper-slide": {
        width: "330px!important",
        [theme.breakpoints.down("tabletM")]: {
          width: "242px!important",
        },
      },
    },
  },
  "&::before": {
    position: "absolute",
    content: `""`,
    width: "150%",
    height: "420px",
    right: "-25%",
    backgroundImage: `linear-gradient(${theme.palette.primary.light + "72"}, ${
      theme.palette.primary.dark + "75"
    }),url("/images/Tooltip.png")`,
    backgroundSize: "100% 470.83px",
    backgroundRepeat: "no-repeat",
    top: "-82px",
    borderRadius: "0 0 38% 38%",
    zIndex: -1,
    [theme.breakpoints.down("tabletM")]: {
      top: "-30px",
      height: "192px",
    },
  },
  "::after": {
    content: `""`,
    position: "absolute",
    width: "150%",
    right: "-25%",
    height: "100px",
    backgroundColor: theme.palette.white,
    borderRadius: "0 0 80% 80%",
    top: "-132px",
    [theme.breakpoints.down("tabletM")]: {
      top: "-80px",
      height: "68px",
    },
  },
}));
const CardBox = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "398px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "24px",
  background: theme.palette.white,
  boxShadow: "0 2px 32px 0 #1C1C1C60",
  [theme.breakpoints.down("tabletM")]: {
    minHeight: "auto",
    height: "360px",
  },
}));
const CompanyImageBox = styled("div")(({ theme }) => ({
  position: "relative",
  "& .background-card": {
    width: "100%!important",
    borderRadius: "25px 25px 25% 25%",
    [theme.breakpoints.down("tabletM")]: {
      height: "119px",
    },
  },
}));
const CompanyInformationBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  padding: "0 16px",
  height: "188px",
  "& p": {
    fontSize: "0.75rem",
    lineHeight: "180%",
    fontWeight: "500",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.black.light,
  },
  "& div:first-child": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "& h2": {
      fontSize: "1rem",
      lineHeight: "140%",
      fontWeight: "700",
    },
    "& span": {
      fontSize: "0.75rem", //12
      lineHeight: "180%",
      fontWeight: "400",
      color: theme.palette.black.light,
    },
  },
  "& div:last-child": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& div": {
      lineHeight: "180%",
      fontWeight: "500",
      display: "flex",
      flexDirection: "row-reverse",
      gap: "4px",
      "&:first-child": {
        alignItems: "center",
        "& span": {
          fontSize: "0.875rem",
          color: theme.palette.gray_4,
        },
        "& svg, svg path": {
          height: "20px",
          width: "20px",
          fill: theme.palette.gray_4,
        },
      },
      "&:last-child": {
        alignItems: "stretch",
        "& span": {
          fontSize: "0.75rem",
          color: theme.palette.gray,
        },
        "& svg, svg path": {
          width: "16px",
        },
      },
    },
  },
}));

const LatestNews = () => {
  const data = useAppSelector((state) => state.home.latestNews);

  return (
    <MainDiv>
      <TitleSection title="تازه‌ترین اخبار" flag={true} textColor="white">
        <SwiperSection
          navigationFlag={false}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item: LatestNewsProps, index) => {
            return (
              <SwiperSlide key={index}>
                <CardBox>
                  <CompanyImageBox>
                    <Image
                      src={item.imageUrl}
                      alt="background"
                      height={176}
                      width={122}
                      className="background-card"
                    />
                  </CompanyImageBox>
                  <CompanyInformationBox>
                    <div>
                      <span>{item.category}</span>
                      <h2>{item.title}</h2>
                    </div>
                    <p>{item.description}</p>
                    <div>
                      <div>
                        <span>{item.author}</span>
                      </div>
                      <div>
                        <span>{item.date}</span>
                        <DateIcon />
                      </div>
                    </div>
                  </CompanyInformationBox>
                </CardBox>
              </SwiperSlide>
            );
          })}
        </SwiperSection>
      </TitleSection>
    </MainDiv>
  );
};

export default LatestNews;
