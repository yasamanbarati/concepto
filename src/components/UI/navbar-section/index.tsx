"use client";
import CustomizedButton from "@/components/button";
import { BoltIcon, LoginIcon } from "@/components/icons";
import SearchInput from "@/components/input/search";
import { navbarLinks } from "@/services/servers/mock";
import { Grid2, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./navbar_menu_section";

const NavbarSection = styled("div")(({ theme }) => ({
  marginTop: "24px",
  minHeight: "103px",
  [theme.breakpoints.down("laptop")]: {
    "& img": {
      width: "150px",
      height: "20px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& img": {
      width: "132px",
      height: "20px",
    },
  },
  "& .MuiGrid2-container": {
    alignItems: "center",
  },
  "& a": {
    fontSize: "1rem",
    fontWeight: "500",
    padding: theme.spacing(1),
  },
}));
const MenuBox = styled("div")(({ theme }) => ({
  position: "relative",
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  backgroundColor: theme.palette.neutral.light,
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },
}));
const NavbarContent = styled(Grid2)(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    gap: "4px",
  },
  "& button.MuiButtonBase-root": {
    width: "auto",
    "& span": {
      margin: 0,
    },
    [theme.breakpoints.down("laptop")]: {
      height: "40px",
      fontSize: "0.76rem",
    },
    [theme.breakpoints.down("tablet")]: {
      minWidth: "32px",
      height: "32px",
      padding: "4px",
    },
  },
}));

const Navbar = () => {
  return (
    <NavbarSection>
      <Grid2 container>
        <Grid2 container spacing={6} size={{ xs: 9, tablet: 7 }}>
          <MenuBox>
            <NavbarMenu />
          </MenuBox>
          <Image src="/images/logo.png" alt={"logo"} width={198} height={24} />
          <SearchInput
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          />
        </Grid2>
        <NavbarContent
          size={{ xs: 3, tablet: 5 }}
          container
          spacing={4}
          justifyContent="end"
        >
          <CustomizedButton
            variant="contained"
            size="medium"
            color="primary"
            text="رایگان شروع کن!"
            startIcon={<BoltIcon width="10px" height="18px" />}
            sx={{ display: { xs: "none", tablet: "flex" } }}
          />
          <CustomizedButton
            variant="outlined"
            size="medium"
            color="black"
            text="ورود/ثبت نام"
            startIcon={<LoginIcon width="10px" height="18px" />}
            sx={{ display: { xs: "none", tablet: "flex" } }}
          />
          <CustomizedButton
            variant="contained"
            size="medium"
            color="primary"
            startIcon={<BoltIcon width="8px" height="15px" />}
            sx={{ display: { xs: "flex", tablet: "none" } }}
          />
          <CustomizedButton
            variant="outlined"
            size="medium"
            color="black"
            startIcon={<LoginIcon width="16px" height="15px" />}
            sx={{ display: { xs: "flex", tablet: "none" } }}
          />
        </NavbarContent>
      </Grid2>
      <Grid2 container size={{ xs: 12 }} display={{ xs: "flex", md: "none" }}>
        <SearchInput />
      </Grid2>
      <Grid2
        container
        spacing={8}
        mt={3}
        py={2}
        display={{ xs: "none", tablet: "flex" }}
      >
        {navbarLinks.map((item, index) => {
          return (
            <Grid2 container key={index} size={{ tablet: "auto", xs: 6 }}>
              <Link href={item.url}>{item.name}</Link>
            </Grid2>
          );
        })}
      </Grid2>
    </NavbarSection>
  );
};

export default Navbar;
