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
  padding: "12px",
  height: "58px",
  borderRadius: "50px",
  marginBottom: "25px",
  "& .MuiButtonBase-root": {
    borderRadius: "50px!important",
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
    width: "162px",
    height: "40px",
    padding: "6px 12px",
    [theme.breakpoints.down("md")]: {
      width: "93px",
      height: "32px",
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
  padding: "0 12px",
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
