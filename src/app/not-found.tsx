"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomizedButton from "@/components/button";
import { styled } from "@mui/material";

const NotFoundDiv = styled("div")(({ theme }) => ({
  margin: "95px auto",
  marginBottom: 0,
  height: "85vh",
  textAlign: "center",
  "& p": {
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "180%",
    color: theme.palette.primary.dark,
    margin: "16px 0 24px",
  },
  [theme.breakpoints.down("tabletM")]: {
    height: "65vh",
    "& img": {
      height: "328px!important",
      width: "300px!important",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
}));

const NotFound = () => {
  const router = useRouter();

  return (
    <NotFoundDiv>
      <Image
        alt="404 image"
        src="/images/404Background.png"
        height={546}
        width={599}
      />
      <p>صفحه مورد نظر شما یافت نشد!</p>
      <CustomizedButton
        variant={"outlined"}
        size={"medium"}
        color="primary"
        text="بازگشت به صفحه اصلی"
        handleOnClick={() => router.back()}
      />
    </NotFoundDiv>
  );
};

export default NotFound;
