import type { SxProps, Theme } from "@mui/material";

export const headerContainerSx: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  bgcolor: "white",
  color: "white",
  zIndex: 1100,

  height: {
    xs: "auto",
    sm: {
      sm: "70px",
      md: "88px",
    },
  },
  display: "flex",

  justifyContent: "space-between",
  gap: "32px",
  textAlign: "center",
  px: {
    xs: "20px",
    sm: "60px",
    md: "96px",
  },
  pt: "24px",

  flexDirection: {
    xs: "column",
    sm: "row",
  },
  alignItems: {
    xs: "center",
    sm: "center",
  },
  pb: {
    xs: "10px",
    sm: "0px",
  },
};

export const searchContainerSx: SxProps<Theme> = {
  width: {
    xs: "100%",
    sm: "100%",
  },
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
};
export const actionsContainerSx: SxProps<Theme> = {
  display: {
    xs: "none",
    sm: "none",
    md: "none",
    lg: "flex",
  },
  alignItems: "center",
  gap: "4px",
};
