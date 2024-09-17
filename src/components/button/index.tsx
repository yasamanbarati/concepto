"use client";
import { Button, SxProps } from "@mui/material";

interface Props {
  text?: string;
  variant: "outlined" | "contained" | "text";
  size: "large" | "medium" | "small";
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  color?: "primary" | "neutral" | "secondary" | "black" | "white";
  handleOnClick?: () => void;
  disabled?: true | false;
}

const CustomizedButton = ({
  text,
  variant,
  startIcon,
  endIcon,
  size,
  sx,
  color = "primary",
  handleOnClick,
  disabled,
  ...other
}: Props) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disableElevation
      sx={sx}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleOnClick}
      disableRipple={true}
      disabled={disabled}
      {...other}
    >
      {text}
    </Button>
  );
};
export default CustomizedButton;
