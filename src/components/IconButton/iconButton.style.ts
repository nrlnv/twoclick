import type { SxProps, Theme } from "@mui/material";
import { theme } from "../../theme/theme";

export const iconButtonSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "52px",
  textTransform: "none",
  padding: "6px",
  gap: "2px",

  //text
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: "100%",
  fontSize: "14px",
};
