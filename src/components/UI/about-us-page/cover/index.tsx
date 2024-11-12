"use client";
import { Grid2, styled } from "@mui/material";
import CustomizedButton from "@/components/button";
import { DiamondIcon, VectorIcon } from "@/components/icons";
import { AboutUsServices } from "@/services/servers/mock";

const CoverBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  paddingTop: "96px",
  marginBottom: "100px",
  [theme.breakpoints.down("tablet")]: {
    paddingTop: "32px",
    marginBottom: "62px",
  },
  "&::after": {
    content: `''`,
    position: "absolute",
    width: "160px",
    height: "160px",
    right: "-130px",
    bottom: "0",
    backgroundColor: theme.palette.primary.main,
    filter: "blur(200px)",
    borderRadius: "50%",
  },
  "&::before": {
    content: `''`,
    position: "absolute",
    width: "160px",
    height: "160px",
    left: "0",
    top: "80px",
    backgroundColor: theme.palette.primary.main,
    filter: "blur(200px)",
    borderRadius: "50%",
    transition: "ease 0.8s",
  },
}));
const CoverContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  "& h2": {
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "140%",
    color: theme.palette.black_dark,
    textAlign: "center",
  },
  "& h3": {
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "140%",
    color: theme.palette.black_dark,
    textAlign: "center",
  },
  "& p": {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "140%",
    color: theme.palette.black_dark,
    textAlign: "center",
    position: "relative",
    "& svg": {
      position: "absolute",
      width: "64px!important",
      height: "64px!important",
      color: "transparent",
      right: "50px",
      bottom: "-75px",
    },
  },
  "& button.MuiButtonBase-root": {
    fontSize: "1.125rem",
    marginTop: "32px",
    width: "auto",
    "& span": {
      margin: 0,
    },
    [theme.breakpoints.down("tabletM")]: {
      fontSize: "0.876rem",
      minWidth: "125px",
      height: "32px",
      marginTop: "16px",
    },
  },
  [theme.breakpoints.down("tabletM")]: {
    "& h2": {
      fontSize: "1.5rem",
    },
    "& h3, p": {
      fontSize: "0.875rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& h2": {
      fontSize: "1.125rem",
    },
    "& h3, p": {
      fontSize: "0.75rem",
      "& svg": {
        right: "18px",
        bottom: "-66px",
      },
    },
  },
}));
const AboutUsServicesCard = styled(Grid2)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: theme.palette.white,
  minHeight: "272px",
  boxShadow: `0 0 20px 0px ${theme.palette.neutral.light + "ad"}`,
  "& svg": {
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.blue.light,
    padding: "8px",
    borderRadius: "8px",
  },
  "& h4": {
    fontSize: "1.25rem",
    fontWeight: "700",
    lineHeight: "140%",
    color: theme.palette.black_dark,
  },
  "& p": {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "140%",
    color: theme.palette.black.dark,
    whiteSpace: "wrap",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "255px",
  },
}));

const CoverSection = () => {
  return (
    <CoverBox>
      <CoverContent>
        <h2>با سرچ کمتر بهترین نتیجرو بگیر!</h2>
        <h3>با ما همراه باش تا درمورد کانسپتو بیشتر اطلاعات کسب کنی</h3>
        <p>
          ما یک چشم انداز داریم: کمک به افراد دیگر برای موفقیت بیشتر.
          <br /> این چیزی است که ما به طور موثر هر روز برای آن کار می کنیم
          <VectorIcon />
        </p>
        <CustomizedButton
          variant="outlined"
          size="medium"
          color="primary"
          text="مشاهده بیشتر"
        />
      </CoverContent>
      <Grid2
        container
        spacing={4}
        mt={{ xs: 8, tabletM: 15, md: 27 }}
        width={"100%"}
      >
        {AboutUsServices.map((item, index) => {
          return (
            <AboutUsServicesCard size={{ xs: 12, tabletM: 6, md: 4 }}>
              <DiamondIcon />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </AboutUsServicesCard>
          );
        })}
      </Grid2>
    </CoverBox>
  );
};

export default CoverSection;
