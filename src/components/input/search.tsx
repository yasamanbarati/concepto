"use client";
import { IconButton, InputBase, styled, SxProps } from "@mui/material";
import { SearchIcon } from "@/components/icons";

const InputSection = styled("div")(({ theme }: any) => ({
  position: "relative",
  width: "440px",
  height: "48px",
  borderRadius: "12px",
  padding: "12px",
  gap: "8px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  "& button": {
    position: "absolute",
    left: "10px",
    "& svg": {
      width: "24px",
      height: "24px",
    },
  },
}));

const SearchInput = ({ sx }: any) => {
  return (
    <InputSection sx={sx}>
      <InputBase
        placeholder="جستجو کسب‌ و کار"
        inputProps={{ "aria-label": "Search Product" }}
        sx={{ width: "100%", height: "100%" }}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </InputSection>
  );
};

export default SearchInput;
