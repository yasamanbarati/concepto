import {
  CategoriesProps,
  CompaniesProps,
  FooterLinksProps,
  navbarLinksProps,
} from "./type";

export const navbarLinks: navbarLinksProps[] = [
  {
    id: "1",
    name: "شرکت‌ها",
    url: "/",
  },
  {
    id: "3",
    name: "فرصت های شغلی",
    url: "/",
  },
  {
    id: "4",
    name: "اخبار و رویدادها",
    url: "/",
  },
  {
    id: "5",
    name: "درباره ما",
    url: "/",
  },
  {
    id: "6",
    name: "تماس با ما",
    url: "/",
  },
];
export const FooterLinks: FooterLinksProps[] = [
  {
    id: 1,
    title: "کانسپتو",
    links: [
      {
        id: 12,
        name: "درباره ما",
        path: "./",
      },
      {
        id: 13,
        name: "تماس با ما",
        path: "./",
      },
      {
        id: 14,
        name: "اتاق خبر",
        path: "./",
      },
      {
        id: 15,
        name: "قوانین و مقررات",
        path: "./",
      },
    ],
  },
  {
    id: 2,
    title: "خدمات مشتریان",
    links: [
      {
        id: 21,
        name: "حساب کاربری",
        path: "./",
      },
      {
        id: 22,
        name: "سوالات متداول",
        path: "./",
      },
      {
        id: 23,
        name: "راهنمای کار با سایت",
        path: "./",
      },
      {
        id: 24,
        name: "گزارش باگ",
        path: "./",
      },
    ],
  },
  {
    id: 3,
    title: "پیشنهاد کانسپتو",
    links: [
      {
        id: 31,
        name: "لیست استارتاپ های ایرانی",
        path: "./",
      },
      {
        id: 32,
        name: "ارزش گزاری استارتاپ",
        path: "./",
      },
      {
        id: 33,
        name: "ایده های استارتاپی",
        path: "./",
      },
      {
        id: 34,
        name: "محبوب ترین شرکت ها",
        path: "./",
      },
    ],
  },
];
export const MapRoad: string[] = [
  "شرکت‌های مورد علاقت رو پیدا کن",
  "کسب و کارهای مناسب رو پیدا کن",
  "با کسب و کارها ارتباط بگیر",
];
export const Categories: CategoriesProps[] = [
  {
    id: 0,
    image: "/images/Button.png",
    name: "هوش مصنوعی",
  },
  {
    id: 1,
    image: "/images/Button (1).png",
    name: "برنامه نویسی",
  },
  {
    id: 2,
    image: "/images/Button (2).png",
    name: "ارز دیجیتال",
  },
  {
    id: 3,
    image: "/images/Switch.png",
    name: "حسابداری",
  },
  {
    id: 4,
    image: "/images/Button (3).png",
    name: "گرافیک",
  },
  {
    id: 5,
    image: "/images/Switch (1).png",
    name: "رسانه‌ها",
  },
  {
    id: 6,
    image: "/images/Switch (2).png",
    name: "هوافضا",
  },
  {
    id: 7,
    image: "/images/Switch (3).png",
    name: "پزشکی",
  },
  {
    id: 8,
    image: "/images/Switch (4).png",
    name: "تجارت الکترونیک",
  },
  {
    id: 9,
    image: "/images/Vertical container.png",
    name: "علمی",
  },
  {
    id: 10,
    image: "/images/Switch (5).png",
    name: "موسیقی",
  },
  {
    id: 11,
    image: "/images/Switch (6).png",
    name: "بیوتکنولوژی",
  },
  {
    id: 12,
    image: "/images/Button (4).png",
    name: "فیلم و سینما",
  },
  {
    id: 13,
    image: "/images/Slider.png",
    name: "حمل و نقل",
  },
];
export const Companies: CompaniesProps[] = [
  {
    id: 11,
    logo: "/images/Alibaba.png",
    company_name: "علی بابا",
    business_type: "تجارت الکترونیک",
    capital_investors: 234,
    new_investors: 46750,
    location: "تهران، ایران",
    description:
      "علی‌بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت شما در سکوی اول گردشگری کشور ایستاده.",
    rating: 5,
  },
  {
    id: 12,
    logo: "/images/Farbi.png",
    company_name: "کارگزاری فارابی",
    business_type: "تجارت الکترونیک",
    capital_investors: 392,
    new_investors: 29110,
    location: "تهران، ایران",
    description:
      "کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه می‌کند؛ همه این خدمات در کارگزاری فارابی به‌صورت غیرحضوری در اختیار شماست.",
    rating: 5,
  },
  {
    id: 13,
    logo: "/images/Digikala.png",
    company_name: "دیجی کالا",
    business_type: "تجارت الکترونیک",
    capital_investors: 432,
    new_investors: 25210,
    location: "تهران، ایران",
    description:
      "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و.",
    rating: 4,
  },
  {
    id: 14,
    logo: "/images/Snapp.png",
    company_name: "اسنپ",
    business_type: "تجارت الکترونیک",
    capital_investors: 398,
    new_investors: 21946,
    location: "تهران، ایران",
    description:
      "از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.",
    rating: 5,
  },
  {
    id: 15,
    logo: "/images/Blu.png",
    company_name: "بلوبانک",
    business_type: "حسابداری",
    capital_investors: 234,
    new_investors: 46750,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 4.5,
  },
  {
    id: 16,
    logo: "/images/SnappFood.png",
    company_name: "اسنپ فود",
    business_type: "تجارت الکترونیک",
    capital_investors: 39,
    new_investors: 29110,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 3.8,
  },
  {
    id: 17,
    logo: "/images/Tapsi.png",
    company_name: "تپسی",
    business_type: "حمل و نقل",
    capital_investors: 43,
    new_investors: 25210,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 4,
  },
  {
    id: 18,
    logo: "/images/Jabinja.png",
    company_name: "جابینجا",
    business_type: "تجارت الکترونیک",
    capital_investors: 39,
    new_investors: 21946,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 3.5,
  },
  {
    id: 19,
    logo: "/images/Iransell.png",
    company_name: "ایرانسل",
    business_type: "تجارت الکترونیک",
    capital_investors: 39,
    new_investors: 21946,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 4,
  },
  {
    id: 20,
    logo: "/images/Divar.png",
    company_name: "دیوار",
    business_type: "تجارت الکترونیک",
    capital_investors: 39,
    new_investors: 21946,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 5,
  },
];
