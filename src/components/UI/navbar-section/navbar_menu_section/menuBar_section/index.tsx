"use client";
import Link from "next/link";
import { Drawer, IconButton, styled, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { navbarLinks } from "@/services/servers/mock";

interface Props {
  handleDrawerClose: () => void;
  open: boolean;
}

const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
const DrawerStyle = {
  width: "250px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "250px",
    height: "calc( 100vh - 65px )",
    right: "0",
    top: "-20px",
    paddingRight: '12px',
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(16px)",
    position: "absolute",
  },
};

const MainLinks = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "0.875rem",
  textDecoration: "none",
  fontWeight: "600",
  color: theme.palette.primary.dark,
  "&:hover": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    margin: "20px 0",
    width: "100%",
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "205px",
      right: "0",
      bottom: "-20px",
      height: "1px",
      backgroundColor: " rgba(0, 0, 0, 0.1)",
    },
    "&::before": {
      content: `''`,
      position: "absolute",
      width: "0",
      right: "0",
      bottom: "-20px",
      height: "2px",
      backgroundColor: theme.palette.secondary.main,
      transition: "ease 0.8s",
    },
    "&:hover::before": {
      width: "50%",
    },
    "&:last-child": {
      "&::after,::before": {
        width: 0,
      },
    },
  },
}));
const MenuBarSection = ({ handleDrawerClose, open }: Props) => {
  const theme = useTheme();
  return (
    <Drawer sx={DrawerStyle} variant="persistent" anchor="right" open={open}>
      <DrawerHeader sx={{ justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
      </DrawerHeader>
      {navbarLinks.map((item, key) => {
        return (
          <MainLinks href={item.url} key={item.id}>
            {item.name}
          </MainLinks>
        );
      })}
    </Drawer>
  );
};

export default MenuBarSection;
