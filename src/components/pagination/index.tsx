import { Pagination, styled } from "@mui/material";
import { esES } from "@mui/material/locale";

interface PaginationComponentProps {
  count: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void; // Function to handle page change
}

const PaginationContent = styled(Pagination)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(6),
  width: "",
  height: "48px",
  "& ul": {
    direction: "ltr",
    padding: "0px 8px 0px 8px",
    backgroundColor: theme.palette.white,
    borderRadius: "12px",
    gap: "8px",
    "& button": {
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      padding: "4px",
    },
  },
}));
const PaginationComponent = ({
  count,
  page,
  onPageChange,
}: PaginationComponentProps) => {
  return (
    <PaginationContent
      count={count}
      page={page}
      onChange={onPageChange}
      color="primary"
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationComponent;
