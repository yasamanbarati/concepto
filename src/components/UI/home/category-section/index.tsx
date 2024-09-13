"use client";

import TitleSection from "@/components/title-section";
import { Categories } from "@/services/servers/mock";
import { Grid2, styled } from "@mui/material";
import Image from "next/image";

const CategoryImage = styled(Image)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  padding: "4px",
}));

const CategorySection = () => {
  return (
    <TitleSection title="دسته بندی ها" flag={false} textColor="gray">
      <Grid2 container spacing={12}>
        {Categories.map((item, index) => {
          return (
            <Grid2
              key={index}
              container
              size={{ xs: 6, sm: 4, tabletM: 3, md: 2 }}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="16px"
            >
              <CategoryImage
                src={item.image}
                alt={item.name}
                width={84}
                height={84}
              />
              <p>{item.name}</p>
            </Grid2>
          );
        })}
      </Grid2>
    </TitleSection>
  );
};
export default CategorySection;
