import type { SxProps, Theme } from "@mui/material";

export const mainContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  px: {
    xs: "20px",
    sm: "60px",
    md: "96px",
  },
  pb: {
    xs: "54px",
    sm: "70px",
    md: "88px",
  },
};
export const containerSx: SxProps<Theme> = {
  paddingTop: {
    xs: "290px",
    sm: "70px",
    md: "88px",
  },
};
