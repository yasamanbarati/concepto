"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { styled } from "@mui/material";

import SwiperSection from "@/components/swiper";
import TitleSection from "@/components/title-section";
import { CompaniesProps } from "@/services/servers/type";
import { useAppSelector } from "@/setup/store/react-hooks";

const SwiperSlideCard = styled(SwiperSlide)(() => ({
  width: "216px!important",
  height: "189px!important",
  marginTop: "30px",
}));
const CardBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  width: "100%!important",
  height: "100%!important",
  position: "relative",
  borderRadius: "24px",
  backgroundColor: theme.palette.neutral.light + "7d",
  "& img": {
    position: "absolute",
    top: "-24px",
    zIndex: 2,
    borderRadius: "8px",
  },
  "& h2": {
    marginTop: "24px",
    fontSize: "1.125rem",
    lineHeight: "140%",
    fontWeight: "500",
    color: theme.palette.black.dark,
  },
  "& span": {
    fontSize: "0.86rem",
    lineHeight: "180%",
    fontWeight: "500",
    color: theme.palette.primary.main,
  },
}));

const JobOpportunities = () => {
  const data = useAppSelector((state) => state.home.jobOpportunity);
  return (
    <TitleSection title="فرصت‌های شغلی" flag={false} textColor="gray">
      <SwiperSection
        navigationFlag={true}
        spaceBetween={24}
        breakpoints={{
          667: {
            slidesPerView: 3,
          },
          940: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item: CompaniesProps, index) => {
          return (
            <SwiperSlideCard key={index}>
              <CardBox>
                <Image src={item.logo} alt="logo" height={72} width={72} />
                <h2>
                  {item.job_opportunity?.toLocaleString("fa-IR")} فرصت شغلی
                </h2>
                <span>{item.company_name}</span>
              </CardBox>
            </SwiperSlideCard>
          );
        })}
      </SwiperSection>
    </TitleSection>
  );
};

export default JobOpportunities;
