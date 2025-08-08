import type { SxProps } from "@mui/material";

export const buttonSx: SxProps = {
  width: "138px",
  height: "40px",
  display: "flex",
  gap: "2px",
  borderRadius: "30px",
  p: "12px",
  boxShadow: "0px 0px 4px 0px #00000040",

  textTransform: "none",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
    borderColor: "transparent", // если есть border
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow: "none",
    borderColor: "transparent",
  },
};
