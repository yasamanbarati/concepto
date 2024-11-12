"use client";

import BreadcrumbsSection from "@/components/breadcrumb";
import CustomizedButton from "@/components/button";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/icons";
import { Grid2, styled, TextField, Typography } from "@mui/material";
import Image from "next/image";

const LocationDiv = styled("div")(({ theme }) => ({
  position: "relative",
  height: "360px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "230px",
  "& img": {
    borderRadius: "16px",
  },
  "& .MuiGrid2-container": {
    minHeight: "235px",
    minWidth: "721px",
    borderRadius: "16px",
    padding: "10px 15px",
    backgroundColor: theme.palette.white,
    boxShadow: "0 2px 32px 0 #1C1C1C60",
    position: "absolute",
    zIndex: "2",
    bottom: "-107px",
    [theme.breakpoints.down("tablet")]: {
      bottom: "-190px",
      width: "calc(100% - 32px)",
      minWidth: "auto",
    },
    "& :first-child.MuiGrid2-root": {
      border: `1px solid ${theme.palette.neutral.main}`,
      borderRadius: "0 12px 12px 0",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      [theme.breakpoints.down("tablet")]: {
        borderRadius: "12px 12px 0 0",
        "& svg": {
          width: "11px!important",
          height: "16px!important",
        },
        "& h3": {
          fontSize: "0.875rem!important",
        },
        "& span": {
          fontSize: "0.75rem",
        },
      },
      "& svg": {
        width: "20px!important",
        height: "20px!important",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& path": {
          fill: theme.palette.black.main,
        },
      },
      "& h3": {
        fontSize: "1rem",
        lineHeight: "180%",
        fontWeight: "500",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "3px",
        color: theme.palette.black.light,
        "&:last-child": {
          marginBottom: "0",
        },
      },
      "& span": {
        fontSize: "0.875rem",
        lineHeight: "140%",
        fontWeight: "400",
        color: theme.palette.black.light,
      },
    },
    "& :last-child.MuiGrid2-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${theme.palette.neutral.main}`,
      borderRadius: "12px 0 0 12px",
      [theme.breakpoints.down("tablet")]: {
        borderRadius: "0 0 12px 12px",
        padding: "32px 80px",
      },
      "& button": {
        padding: "12px",
        "& span": {
          marginRight: 0,
          "& svg": {
            width: "20px!important",
            height: "20px!important",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            "& path": {
              fill: theme.palette.primary.main,
            },
          },
        },
      },
    },
  },
}));

const FormPaper = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.neutral.light}`,
  padding: "32px",
  borderRadius: "16px",
  marginTop: "24px",
  "& .MuiFormControl-root": {
    marginBottom: "24px",
    "&:last-child": {
      marginBottom: 0,
    },
    "& .Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& label": {
      right: "30px",
    },
    "& .MuiInputBase-root": {
      height: "48px",
      borderRadius: "12px",
      "& input:focus": {
        color: theme.palette.primary.main + "!important",
      },
      "& fieldset": {
        textAlign: "right",
      },
    },
    "& label[data-shrink='true']": {
      right: "-80px", // تغییر مقدار right
    },
  },

  "& #text-massage": {
    "& .MuiFormControl-root": {
      height: "100%",
      [theme.breakpoints.down("md")]: {
        height: "296px",
      },
      "& .MuiInputBase-root": {
        height: "100%",
      },
      "& label[data-shrink='true']": {
        right: "-175px", // تغییر مقدار right
      },
    },
  },
}));

const Page = () => {
  return (
    <>
      <BreadcrumbsSection disabledLink="تماس با ما" />
      <LocationDiv>
        <Image src="/images/location.png" alt="location" fill />
        <Grid2 container spacing={0}>
          <Grid2 size={{ xs: 12, tablet: 8 }}>
            <Typography variant="h5" component="h2" color="primary" mb={6}>
              فرم تماس با ما
            </Typography>
            <h3>
              <LocationIcon />
              آدرس:{" "}
              <span> تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو</span>
            </h3>
            <h3>
              <PhoneIcon />
              شماره تماس: 09123456789
            </h3>
            <h3>
              <EmailIcon />
              ایمیل: info@concepto.com
            </h3>
          </Grid2>
          <Grid2 size={{ xs: 12, tablet: 4 }}>
            <CustomizedButton
              variant={"outlined"}
              size={"medium"}
              color="primary"
              startIcon={<LocationIcon />}
              text="جستجو در گوگل مپ"
            />
          </Grid2>
        </Grid2>
      </LocationDiv>
      <Typography variant="body1" component="p" color="textPrimary">
        ما در مجموعه کانسپتو همواره به نظرات، پیشنهادات و سوالات شما عزیزان ارزش
        قائلیم و مشتاقانه منتظر کمک به شما هستیم.
      </Typography>
      <FormPaper>
        <Typography variant="h5" component="h3" color="primary" mb={8}>
          فرم تماس با ما
        </Typography>
        <Grid2 container spacing={8}>
          <Grid2
            size={{ xs: 12, md: 4 }}
            display={"flex"}
            flexDirection={"column"}
          >
            <TextField
              label="نام و نام خانوادگی"
              variant="outlined"
              fullWidth
            />
            <TextField label="شماره تماس" variant="outlined" fullWidth />
            <TextField label="آدرس ایمیل" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }} id="text-massage">
            <TextField label="متن پیام" variant="outlined" fullWidth />
          </Grid2>
        </Grid2>
      </FormPaper>
    </>
  );
};

export default Page;
