import type { SxProps, Theme } from "@mui/material";

export const containerSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1248px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "39px",
  alignItems: "center",
  backgroundColor: "#FAF8F6",
};

export const categoriesContainerSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  pt: "24px",
  backgroundColor: "#FFFFFF",
};

export const textContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",
};
export const categoriesListContainerSx: SxProps<Theme> = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 140px)",
  // gap: "15px",
  gap: {
    xs: "8px",
    sm: "15px",
  },
  justifyContent: "center",
  justifyItems: "center",
};

export const recomendedContainerSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  pt: "24px",
};

export const productListContainerSx: SxProps<Theme> = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 400px)",
  gap: "24px",
  justifyContent: "center",
  justifyItems: "center",
};
