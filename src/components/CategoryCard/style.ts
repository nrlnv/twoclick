import type { SxProps, Theme } from "@mui/material";

export const cardContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  height: {
    xs: "160px", // mobile
    sm: "180px", // ≥600px
    md: "200px", // ≥900px
    lg: "214px", // ≥1200px
  },
  alignItems: "center",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.03)",
  },
};

export const cardImageSx: SxProps<Theme> = {
  width: {
    xs: "80px", //mobile
    sm: "100px", // от 600px
    md: "120px", // от 900px
    lg: "140px", // от 1200px
  },
  height: "auto",
};
