"use client";

import ImportantNewsCard from "@/components/cards/Important-news-card";
import { useAppSelector } from "@/setup/store/react-hooks";
import { Grid2, styled } from "@mui/material";

const ContentSection = styled(Grid2)(({ theme }) => ({
  minHeight: "400px",
  "& .MuiGrid2-root": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:first-child": {
      border: `5px solid ${theme.palette.primary.main}`,
      borderRadius: "24px",
      padding: "5px",
      // "& span": {
      //   position: "absolute",
      //   top: 0,
      //   right: "40px",
      //   color: theme.palette.white,
      //   borderRadius: "8px",
      //   backgroundColor: theme.palette.primary.main,
      // },
      "& p": {
        width: "98.5%",
        bottom: "4px",
      },
      [theme.breakpoints.down("tablet")]: {
        height: "300px",
      },
      [theme.breakpoints.down("tabletM")]: {
        height: "224px",
      },
    },
    "&.Grid2-box .MuiGrid2-root": {
      border: "none",
      padding: 0,
      height: "48%",
      "& p": {
        width: "100%",
        bottom: "0",
      },
      [theme.breakpoints.down("tabletM")]: {
        height: "198px",
      },
    },
  },
}));

const ImportantNewsEventsSection = () => {
  const news = useAppSelector((state) => state.NewsEvents.ImportantNews);

  return (
    <ContentSection container spacing={8}>
      {/* <span>مهمترین خبر</span> */}
      <ImportantNewsCard
        size={{ xs: 12, tablet: 6 }}
        image={news[0].image}
        description={news[0].description}
        id={news[0].id}
      />
      <Grid2
        container
        size={{ xs: 12, tablet: 6 }}
        spacing={4}
        className="Grid2-box"
      >
        <ImportantNewsCard
          size={12}
          image={news[1].image}
          description={news[1].description}
          id={news[1].id}
        />
        <ImportantNewsCard
          size={12}
          image={news[2].image}
          description={news[2].description}
          id={news[2].id}
        />
      </Grid2>
    </ContentSection>
  );
};

export default ImportantNewsEventsSection;
