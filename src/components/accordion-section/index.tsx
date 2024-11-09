"use client";

import { styled, Typography } from "@mui/material";
import { useState } from "react";
import TableSection from "../UI/news-events-page/table-section";
import { ImportantNewsProps } from "@/services/servers/type";
import { useAppSelector } from "@/setup/store/react-hooks";
import PaginationComponent from "../pagination";

const sections = [
  {
    id: 31,
    title: "همه خبرها",
    content: "Content for item 1",
  },
  {
    id: 32,
    title: "رویدادها",
    content: "Content for item 2",
  },
  {
    id: 33,
    title: "اطلاع رسانی ها",
    content: "Content for item 3",
  },
  {
    id: 34,
    title: "کارآفرین های ایرانی",
    content: "Content for item 4",
  },
];

const AccordionMain = styled("div")(({ theme }) => ({
  marginTop: "72px",
  position: "relative",
  "&::after": {
    content: `''`,
    backgroundColor: theme.palette.neutral.light + "78",
    width: "300%",
    height: "100%",
    position: "absolute",
    zIndex: "-2",
    top: "45px",
    left: "-50%",
    padding: "24px 108px 24px 108px",
    borderRadius: "0 0 75% 35%",
  },
}));

const AccordionHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  "& h3": {
    color: theme.palette.black.main,
    padding: "8px 12px",
  },
}));

const AccordionContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "300px",
  borderRadius: "16px",
  backgroundColor: theme.palette.white,
  marginTop: "24px",
}));
const AccordionContentHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  position: "relative",
  "&::after": {
    content: `''`,
    backgroundColor: theme.palette.neutral.main,
    width: "100%",
    height: "1px",
    position: "absolute",
    zIndex: "1",
    bottom: "0",
  },
  "& h4": {
    padding: "24px",
  },
}));
const AccordionContentTable = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "0 24px 12px 24px",
  "& div:last-child": {
    border: "none",
  },
}));

const AccordionSection = () => {
  const NewsData = useAppSelector((state) => state.NewsEvents.News);
  const [activeIndex, setActiveIndex] = useState<number | null>(31);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const activeSection = sections.find((section) => section.id === activeIndex);
  const displayedItems = NewsData.slice((pageIndex - 1) * 6, pageIndex * 6);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageIndex(value);
  };

  return (
    <AccordionMain>
      <AccordionHeader>
        {sections.map((item, index) => (
          <>
            <Typography
              variant="body1"
              component="h3"
              onClick={() => handleToggle(item.id)}
              style={{
                cursor: "pointer",
                color: item.id === activeIndex ? "#0D6EFD" : "black",
                background:
                  item.id === activeIndex ? "#E9EAEE78" : "transparent",
                borderRadius: "12px 12px 0 0",
                border:
                  item.id === activeIndex ? "1px solid #CBCED7" : "transparent",
                borderBottom: 0,
              }}
            >
              {item.title}
            </Typography>
          </>
        ))}
      </AccordionHeader>
      <AccordionContent>
        {activeSection && (
          <>
            <AccordionContentHeader>
              <Typography variant="h5" component="h4">
                {activeSection.title}
              </Typography>
            </AccordionContentHeader>

            <AccordionContentTable>
              {displayedItems.map((item: ImportantNewsProps, index) => (
                <TableSection
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  timestamp={item.timestamp}
                  id={item.id}
                />
              ))}
            </AccordionContentTable>
          </>
        )}
      </AccordionContent>
      {NewsData.length > 0 && (
        <PaginationComponent
          count={Math.ceil(NewsData.length / 6)}
          page={pageIndex}
          onPageChange={handlePageChange}
        />
      )}
    </AccordionMain>
  );
};

export default AccordionSection;
