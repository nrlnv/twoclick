import type { SxProps, Theme } from "@mui/material";

export const buttonSx: SxProps<Theme> = {
  width: "120px",
  height: "40px",
  borderRadius: "30px",
  textTransform: "none",
  padding: "10px",
  gap: "10px",

  //text
  fontWeight: 400,
  color: "white",
  lineHeight: "100%",
  fontSize: "14px",

  "&:focus": {
    outline: "none",
    boxShadow: "none",
    borderColor: "transparent",
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow: "none",
    borderColor: "transparent",
  },
};
