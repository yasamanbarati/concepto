import {
  CategoriesProps,
  CompaniesProps,
  FooterLinksProps,
  LatestNewsProps,
  navbarLinksProps,
  RecentEventsProps,
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
    url: "/news-events",
  },
  {
    id: "5",
    name: "درباره ما",
    url: "/about-us",
  },
  {
    id: "6",
    name: "تماس با ما",
    url: "/contact-us",
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
        path: "/about-us",
      },
      {
        id: 13,
        name: "تماس با ما",
        path: "/contact-us",
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
    job_opportunity: 18,
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
    job_opportunity: 14,
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
    job_opportunity: 3,
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
    job_opportunity: 0,
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
    job_opportunity: 12,
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
    job_opportunity: 7,
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
    job_opportunity: 0,
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
    job_opportunity: 0,
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
    job_opportunity: 0,
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
    job_opportunity: 14,
    location: "تهران، ایران",
    description:
      " متن مکان‌یابی است که معمولاً در صنایع گرافیک، چاپ و انتشار برای پیش‌نمایش طرح‌بندی‌ها و ماکت‌های بصری استفاده می‌شود. این یک رشته بی معنی از کلمات لاتین است که به طراحان و ویراستاران کمک می کند تا محصول نهایی را بدون پرت شدن محتوای واقعی تجسم کنند.",
    rating: 5,
  },
];
export const LatestNews: LatestNewsProps[] = [
  {
    id: 1,
    category: "تجارت الکترونیک",
    title: "ثبت رکورد جدید در خدمات آنلاین علی‌بابا",
    description:
      "علی‌بابا در ثبت سفارشات آنلاین خدمات گردشگری شکسته است: ثبت ۳ خدمت در هر ثانیه.",
    imageUrl: "/images/news3.png",
    date: "1402/12/03",
    author: "اتوسا صفوی",
  },
  {
    id: 2,
    category: "تجارت الکترونیک",
    title: "مشکل فنی اسنپ فود به دلیل دسترسی خارج",
    description:
      "بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد. این مشکل باعث نارضایتی کاربران گردید.",
    imageUrl: "/images/news2.png",
    date: "1402/12/02",
    author: "امیر بحتیاری",
  },
  {
    id: 3,
    category: "تجارت الکترونیک",
    title: "اسنپ رکورد سفرهای روزانه را شکست",
    description:
      "در ماه پایانی سال 1402، اسنپ رکورد روزانه سفرهای خود را با بیش از 5 میلیون سفر شکست.",
    imageUrl: "/images/news1.png",
    date: "1402/12/01",
    author: "فرهاد رافعی",
  },
  {
    id: 4,
    category: "تجارت الکترونیک",
    title: "رشد ۳۰ درصدی فروش آنلاین در سال ۱۴۰۲",
    description:
      "فروش آنلاین در سال جاری نسبت به سال گذشته ۳۰ درصد افزایش یافته است.",
    imageUrl: "/images/news3.png",
    date: "1402/12/04",
    author: "سارا احمدی",
  },
  {
    id: 5,
    category: "تجارت الکترونیک",
    title: "توسعه خدمات جدید در دیجی‌کالا",
    description:
      "دیجی‌کالا به زودی خدمات جدیدی را برای مشتریان خود ارائه خواهد داد.",
    imageUrl: "/images/news2.png",
    date: "1402/12/05",
    author: "مهدی رضایی",
  },
  {
    id: 6,
    category: "تجارت الکترونیک",
    title: "افزایش تعداد کاربران اسنپ",
    description: "تعداد کاربران فعال اسنپ به بیش از ۱۰ میلیون نفر رسید.",
    imageUrl: "/images/news1.png",
    date: "1402/12/06",
    author: "علی حسینی",
  },
  {
    id: 7,
    category: "تجارت الکترونیک",
    title: "معرفی اپلیکیشن جدید برای خدمات مالی",
    description: "یک اپلیکیشن جدید برای ارائه خدمات مالی به کاربران معرفی شد.",
    imageUrl: "/images/news3.png",
    date: "1402/12/07",
    author: "فاطمه کاظمی",
  },
  {
    id: 8,
    category: "تجارت الکترونیک",
    title: "رکورد جدید در تحویل غذا توسط زودفود",
    description: "زودفود رکورد جدیدی در زمان تحویل غذا ثبت کرد.",
    imageUrl: "/images/news2.png",
    date: "1402/12/08",
    author: "امیر محمدی",
  },
];
export const RecentEvents: RecentEventsProps[] = [
  {
    id: 1,
    title: "سکوی پرتاب غزال",
    description:
      "سکوی پرتاب غزال ۳۷ ماه جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌ها برگزار می‌شود. این رویداد فرصتی برای کارآفرینان و سرمایه‌گذاران است تا ایده‌های نوآورانه خود را ارائه دهند. شرکت‌کنندگان می‌توانند با متخصصان صنعت ملاقات کنند و از تجربیات آن‌ها بهره‌مند شوند. همچنین، پنل‌های بحث و کارگاه‌های آموزشی در این رویداد برگزار خواهد شد.",
    date: "۱۴۰۲/۱۲/۰۳",
    location: "تهران، ایران",
    imageUrl: "/images/Recent-events3.png",
  },
  {
    id: 2,
    title: "بوت کمپ برنامه‌نویسی دیجی‌کالا",
    description:
      "در این دوره، شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، آموزش خواهید دید. این بوت کمپ شامل مباحثی مانند برنامه‌نویسی وب، طراحی UX/UI و توسعه نرم‌افزار است. هدف این دوره، آماده‌سازی شرکت‌کنندگان برای ورود به بازار کار و ارتقاء مهارت‌های فنی آن‌هاست. در پایان دوره، گواهی‌نامه‌ای معتبر به شرکت‌کنندگان اعطا می‌شود.",
    date: "۱۴۰۲/۱۱/۲۹",
    location: "تهران، ایران",
    imageUrl: "/images/Recent-events4.png",
  },
  {
    id: 3,
    title: "فراخوان جذب ایده و استارتاپ",
    description:
      "در حاشیه همایش معدنکاری دیجیتال ۱۴۰۱، خانه خلاق و نوآوری با همکاری اقتصاد دنیا، ایده‌ها و استارتاپ‌ها را جذب می‌کند. این رویداد فرصتی مناسب برای افرادی است که به دنبال حمایت مالی و مشاوره هستند. شرکت‌کنندگان می‌توانند ایده‌های خود را به داوران ارائه دهند و از نظرات آنان بهره‌مند شوند. همچنین، کارگاه‌های آموزشی و شبکه‌سازی در این همایش برگزار خواهد شد.",
    date: "۱۴۰۲/۱۲/۲۲",
    location: "تهران، ایران",
    imageUrl: "/images/Recent-events1.png",
  },
  {
    id: 4,
    title: "سکوی پرتاب قزوین",
    description:
      "سکوی پرتاب قزوین به منظور سرمایه‌گذاری تخصصی و شناسایی تیم‌ها با هدف جذب سرمایه برگزار می‌شود. این رویداد به کارآفرینان این امکان را می‌دهد تا با سرمایه‌گذاران ملاقات کرده و ایده‌های خود را معرفی کنند. همچنین، پنل‌های تخصصی با حضور کارشناسان برجسته برگزار خواهد شد. هدف این سکوی پرتاب، ایجاد یک اکوسیستم نوآورانه در قزوین است.",
    date: "۱۴۰۲/۱۱/۲۴",
    location: "قزوین، ایران",
    imageUrl: "/images/Recent-events2.png",
  },
  {
    id: 5,
    title: "فرصت سرمایه‌گذاری در استارتاپ‌ها",
    description:
      "فرصت‌های سرمایه‌گذاری در تیم‌های استارتاپی و دانش‌بنیان در این رویداد بررسی می‌شود. سرمایه‌گذاران می‌توانند با استارتاپ‌های نوپا آشنا شوند و در پروژه‌های نوآورانه سرمایه‌گذاری کنند. این رویداد شامل جلسات مشاوره و ارائه‌های استارتاپ‌ها است. همچنین، کارگاه‌هایی برای آموزش نحوه جذب سرمایه و موفقیت در بازار برگزار خواهد شد.",
    date: "۱۴۰۲/۱۲/۰۱",
    location: "تهران، ایران",
    imageUrl: "/images/Recent-events1.png",
  },
];
