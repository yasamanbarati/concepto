"use client";
import { IconButton, InputBase, styled } from "@mui/material";
import { SearchIcon } from "@/components/icons";

const InputSection = styled("div")(({ theme }) => ({
  position: "relative",  [theme.breakpoints.down("lg")]: {
    width: "320px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "16px",
    width: "100%",
    height: "40px",
  },
  width: "440px",
  height: "48px",
  borderRadius: "12px",
  padding: "12px",
  gap: "8px",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: theme.palette.neutral.light,

  "& input::placeholder": {
    color: theme.palette.gray,
  },
  "& button": {
    "& svg": {
      width: "24px",
      height: "24px",
      "& path": {
        fill: theme.palette.gray,
      },
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
