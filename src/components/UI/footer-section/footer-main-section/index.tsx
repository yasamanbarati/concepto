"use client";
import Link from "next/link";

import { Container, Grid2, styled } from "@mui/material";

import { FooterLinks } from "@/services/servers/mock";
import Image from "next/image";
import EmailInput from "@/components/input/email";
import { LocationIcon, PhoneIcon } from "@/components/icons";
import { FooterContentConnectionsSocialIcons } from "./footer_content_connections_social";

const LinkGrid = styled(Grid2)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  "& h3, a": {
    color: theme.palette.white,
    fontWeight: "500",
  },
  "& h3": {
    fontSize: "1.125rem", //18
    lineHeight: "140%",
    fontWeight: "700",
    marginBottom: "16px",
  },
  "& a": {
    fontSize: "0.875rem", //14
    lineHeight: "180%",
    fontWeight: "500",
    marginBottom: "12px",
  },
}));
const FooterInfo = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "32px",
  },
  "& p": {
    color: theme.palette.white,
    fontWeight: "500",
    marginTop: "16px",
  },
}));
const FooterContent = styled(Grid2)(({ theme }) => ({
  color: theme.palette.white,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  "& div svg": {
    width: "24px!important",
    height: "24px!important",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  "& div h3": {
    fontSize: "1.125rem", //18
    lineHeight: "140%",
    fontWeight: "700",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
  },
  "& div span": {
    fontSize: "0.875rem", //18
    lineHeight: "140%",
    fontWeight: "500",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: "32px",
  },
}));

const FooterMainSection = () => {
  return (
    <Container fixed>
      <Grid2 container spacing={{ md: 16, laptop: 20 }} py={{ md: 18 }}>
        <Grid2
          container
          size={{ xs: 12, md: 7 }}
          justifyContent={{ xs: "space-between", md: "flex-start" }}
          mt={{ xs: 15, md: 0 }}
        >
          {FooterLinks.map((item, index) => {
            return (
              <LinkGrid size={{ md: 4 }}>
                <h3>{item.title}</h3>
                {item.links.map((item, index) => {
                  return <Link href={item.path}>{item.name}</Link>;
                })}
              </LinkGrid>
            );
          })}
          <FooterInfo>
            <Image
              src="/images/logo (1).png"
              alt="Logo"
              width={132}
              height={16}
            />
            <p>
              استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا
              پروژه‌های پیشرفته، جهان استارت‌آپ‌ها را از اینجا کشف کنید.
            </p>
          </FooterInfo>
        </Grid2>
        <FooterContent size={{ xs: 12, md: 5 }}>
          <div>
            <h3>از جـدیدتریـن اخبار مطلع شـویـد:</h3>
            <EmailInput isLoading={false} />
          </div>
          <div>
            <h3>
              <LocationIcon />
              آدرس:{" "}
              <span> تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو</span>
            </h3>
            <h3>
              <PhoneIcon />
              شماره تماس: 09123456789
            </h3>
          </div>
          <div>
            <h3>ما را در شبکه های اجتماعی دنبال کنید:</h3>
            <FooterContentConnectionsSocialIcons />
          </div>
        </FooterContent>
      </Grid2>
    </Container>
  );
};

export default FooterMainSection;
