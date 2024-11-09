"use client";

import { HeartIcon, ShearIcon } from "@/components/icons";
import { ImportantNewsProps } from "@/services/servers/type";
import { styled, Typography } from "@mui/material";

const TableRowCard = styled("div")(({ theme }) => ({
  padding: "16px 0",
  borderBottom: `1px solid ${theme.palette.neutral.main}`,
  "& .header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "& span": {
      fontSize: "0.75rem",
      lineHeight: "25.2px",
      fontWeight: "400",
      marginTop: "12px",
      color: theme.palette.gray,
    },
    "& .header-icon": {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      margin: "8px 0",
      "& svg": {
        width: "20px",
        height: "20px",
      },
    },
  },
  "& p": {
    marginTop: "8px",
    fontSize: "0.875rem",
    lineHeight: "140%",
    fontWeight: "500",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "start",
  },
}));

const TableSection = ({
  title,
  timestamp,
  description,
}: ImportantNewsProps) => {
  return (
    <TableRowCard>
      <div className="header">
        <div>
          <Typography variant="body1" component="h5">
            {title}
          </Typography>
          <span>{timestamp}</span>
        </div>
        <div className="header-icon">
          <HeartIcon />
          <ShearIcon />
        </div>
      </div>
      <p>{description}</p>
    </TableRowCard>
  );
};

export default TableSection;
