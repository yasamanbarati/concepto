"use client";

import { styled } from "@mui/material";
import Image from "next/image";

const ContentBox = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  justifyContent: "space-between",
  alignItems: "stretch",
  gap: "24px",
  "& div": {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    "& h3": {
      fontSize: "1.25rem",
      lineHeight: "140%",
      fontWeight: "700",
      color: theme.palette.black_dark,
      marginBottom: "16px",
    },
    "& p": {
      fontSize: "1.125rem",
      lineHeight: "180%",
      fontWeight: "100",
      color: theme.palette.black.dark,
    },
  },
  "& img": {
    gridColumnStart: "2",
    gridColumnEnd: "4",
    position: "relative!important",
  },

  [theme.breakpoints.down("md")]: {
    maxHeight: "700px",
    "& div": {
      gridColumnStart: "1",
      gridColumnEnd: "4",
      "& p": {
        fontSize: "1rem",
        fontWeight: "400",
        [theme.breakpoints.down("tabletM")]: {
          fontSize: "0.875rem",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.75rem",
        },
      },
    },
    "& img": {
      gridColumnStart: "1",
      gridColumnEnd: "4",
      height: "calc( 100% - 50%)!important",
      [theme.breakpoints.down("tabletS")]: {
        height: "calc( 100% - 40%)!important",
        [theme.breakpoints.down("mobileS")]: {
          height: "calc( 100% - 20%)!important",
        },
      },
    },
  },
}));

const OurStory = () => {
  return (
    <ContentBox>
      <div>
        <h3>داستان ما</h3>
        <p>
          "در سال ۲۰۱۵، یک گروه از افراد متخصص و متعهد با تجربه‌های گوناگون در
          حوزه‌های فناوری، کسب‌وکار و بازاریابی، با هم متحد شدند تا یک پلتفرم
          برجسته برای معرفی استارتاپ‌ها و شرکت‌های نوپا ایجاد کنند. با توجه به
          نیاز روزافزون جامعه به دسترسی آسان‌تر به اطلاعات درباره استارتاپ‌ها و
          فرصت‌های کسب‌وکار جدید، این گروه تصمیم گرفت تا با تلاش و هماهنگی
          فراوان، پلتفرمی راه‌اندازی کنند که به شرکت‌ها کمک کند تا به دیده شدن
          بیشتری دست یابند. توسعه و راه‌اندازی این پلتفرم، با مطالعه دقیق بازار
          و نیازهای جامعه هدف، به یک پروژه جامع و بلندمدت تبدیل شد. با استفاده
          از تخصص‌های فنی، بازاریابی و مدیریتی خود، این گروه به سرعت توانست به
          رشد و پیشرفت قابل توجهی دست یابد. از آن زمان تاکنون، این استارتاپ به
          عنوان یکی از منابع معتبر و قابل اعتماد برای معرفی استارتاپ‌ها و
          شرکت‌های نوپا به بازار شناخته شده است و همچنین به عنوان یک پلتفرم
          حیاتی برای ارتباطات تجاری و بنیان‌گذاران جوان محسوب می‌شود."
        </p>
      </div>
      <Image alt="our story" src="/images/our-story.png" fill />
    </ContentBox>
  );
};

export default OurStory;
