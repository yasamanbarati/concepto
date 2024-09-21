"use client";
import Image from "next/image";
import { styled } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import SwiperSection from "@/components/swiper";
import { useAppSelector } from "@/setup/store/react-hooks";
import TitleSection from "@/components/title-section";
import { LocationIcon, StarIcon } from "@/components/icons";
import { CompaniesProps } from "@/services/servers/type";

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
  paddingBottom: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
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
  height: "194px",
  "& .background-card": {
    width: "100%!important",
    borderRadius: "24px 24px 25% 25%",
    [theme.breakpoints.down("tabletM")]: {
      height: "96px",
    },
  },
  "& div": {
    position: "absolute",
    width: "100%",
    bottom: "15px",
    display: "flex",
    alignItems: "flex-end",
    gap: "16px",
    padding: "0 16px",
    [theme.breakpoints.down("tabletM")]: {
      bottom: "0px",
    },
    "& img": {
      border: "3px solid #fff",
      borderRadius: "12px",
    },
    "& h2": {
      fontSize: "0.875rem",
      lineHeight: "180%",
      fontWeight: "500",
      color: theme.palette.black.dark,
      "& span": {
        fontSize: "0.75rem",
        lineHeight: "180%",
        fontWeight: "500",
        color: theme.palette.gray,
      },
      [theme.breakpoints.down("tablet")]: {
        "& h2": {
          fontSize: "0.75rem",
        },
      },
    },
  },
}));
const CompanyInformationBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "0 16px",
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
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    "& .information-invertors": {
      padding: "8px",
      borderRadius: "12px",
      border: `1px solid ${theme.palette.neutral.light}`,
      flexDirection: "column",
      alignItems: "start",
      width: "50%",
      "& h2": {
        fontSize: "0.75rem",
        lineHeight: "180%",
        fontWeight: "500",
        color: theme.palette.black.dark,
        display: "inline-block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textAlign: "start",
        width: "10.64ch",
      },
      "& span": {
        fontSize: "0.875rem",
        lineHeight: "180%",
        fontWeight: "700",
        color: theme.palette.primary.main,
      },
    },
  },
  "& div:last-child": {
    "& div": {
      lineHeight: "180%",
      fontWeight: "500",
      display: "flex",
      flexDirection: "row-reverse",
      gap: "4px",
      "&:first-child": {
        alignItems: "center",
        "& span": {
          fontSize: "0.875rem", //14
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
          fontSize: "1rem", //14
          color: theme.palette.gray,
        },
        "& svg, svg path": {
          width: "18px",
        },
      },
    },
  },
}));

const PopularCompaniesSection = () => {
  const data = useAppSelector((state) => state.home.popularCompanies);

  return (
    <MainDiv>
      <TitleSection title="شرکت های محبوب" flag={true} textColor="white">
        <SwiperSection
          navigationFlag={false}
          spaceBetween={24}
          breakpoints={{
            667: {
              slidesPerView: 2,
            },
            940: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item: CompaniesProps, index) => {
            return (
              <SwiperSlide key={index}>
                <CardBox>
                  <CompanyImageBox>
                    <Image
                      src="/images/Tooltip.png"
                      alt="background"
                      height={122}
                      width={122}
                      className="background-card"
                    />
                    <div>
                      <Image
                        src={item.logo}
                        alt="Company logo"
                        width={72}
                        height={72}
                        className="company-logo"
                      />
                      <h2>
                        {item.company_name} <br />
                        <span>{item.business_type}</span>
                      </h2>
                    </div>
                  </CompanyImageBox>
                  <CompanyInformationBox>
                    <div>
                      <div className="information-invertors">
                        <h2>مخاطبین جدید</h2>
                        <span>{item.new_investors}</span>
                      </div>
                      <div className="information-invertors">
                        <h2>سرمایه گذاران جدید</h2>
                        <span>{item.capital_investors}</span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <div>
                      <div>
                        <span>{item.location}</span>
                        <LocationIcon />
                      </div>
                      <div>
                        <span>{item.rating}</span>
                        <StarIcon />
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

export default PopularCompaniesSection;
