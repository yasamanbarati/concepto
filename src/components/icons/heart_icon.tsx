import { SvgIcon, SvgIconProps } from "@mui/material";

export function HeartIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5.825c-1.74 0-3.41.81-4.5 2.09C8.91 1.635 7.24.825 5.5.825c-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54l1.45 1.31 1.45-1.32c5.15-4.67 8.55-7.75 8.55-11.53 0-3.08-2.42-5.5-5.5-5.5Zm-4.4 15.55-.1.1-.1-.1C5.14 12.065 2 9.215 2 6.325c0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05Z"
        fill="#737993"
      />
    </SvgIcon>
  );
}
