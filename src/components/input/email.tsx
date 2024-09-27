import React, { useState } from "react";
import { Button, CircularProgress, Input, Paper, styled } from "@mui/material";
import { CheckIcon } from "../icons";
import CustomizedButton from "../button";

interface Props {
  onClickEvent?: () => unknown;
  isLoading?: boolean;
}

const PaperForm = styled(Paper)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "0 6px",
  height: "58px",
  borderRadius: "50px",
  [theme.breakpoints.down("md")]: {
    height: "40px",
    borderRadius: "8px",
  },
  "& .MuiButtonBase-root": {
    borderRadius: "50px!important",
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
    width: "162px",
    height: "40px",
    padding: "6px 12px",
    [theme.breakpoints.down("md")]: {
      width: "30%",
      height: "32px",
      fontSize: "0.875rem", 
      borderRadius: "8px!important",
    },
    "& span, svg": {
      marginLeft: 0,
    },
    "& span": {
      marginRight: "4px",
    },
  },
}));

const InputBase = styled(Input)(() => ({
  width: "100%",
  height: "40px",
  padding: "12px",
  fontSize: "1rem",
  lineHeight: "140%",
  fontWeight: "500",
  "&::before": {
    borderBottom: "none",
  },
}));

const EmailInput = ({ onClickEvent, isLoading }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleOnClick = async () => {
    if (isLoading || loading) return;

    setLoading(true);

    if (onClickEvent) onClickEvent();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <PaperForm>
      <InputBase
        placeholder="ایمیل خود را وارد کنید"
        inputProps={{ "aria-label": "info@gmial.com" }}
        disabled={loading ? true : false}
      />
      {loading ? (
        <CircularProgress size={30} color="inherit" />
      ) : (
        <CustomizedButton
          variant={"contained"}
          size={"medium"}
          text="عضویت"
          endIcon={<CheckIcon />}
          disabled={loading}
        />
      )}
    </PaperForm>
  );
};

export default EmailInput;
