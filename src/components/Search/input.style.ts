import type { SxProps, Theme } from "@mui/material";
import { fonts } from "../../assets/fonts/fonts";

export const inputSx: SxProps<Theme> = (theme) => ({
  width: "100%",
  minWidth: "210px",
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
    maxWidth: "100%",
  },

  "& .MuiOutlinedInput-root": {
    height: {
      xs: "36px",
      sm: "40px",
      md: "44px",
    },

    borderTopLeftRadius: "30px",
    borderBottomLeftRadius: "30px",

    borderTopRightRadius: {
      xs: "30px",
      sm: "0px",
    },
    borderBottomRightRadius: {
      xs: "30px",
      sm: "0px",
    },
    display: "flex",
    alignItems: "center",

    "& fieldset": {
      borderColor: "#FF7E70",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#FF7E70",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF7E70",
    },

    "& .MuiInputBase-input": {
      padding: {
        xs: "10px 0",
        sm: "12px 0",
        md: "14px 0",
      },
      marginLeft: {
        xs: "10px",
        sm: "14px",
        md: "18px",
      },
      fontFamily: fonts.montserrat,
      fontSize: {
        xs: "13px",
        sm: "14px",
        md: "16px",
      },
    },
  },
});

export const adornmentSx: SxProps<Theme> = () => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  gap: {
    xs: "4px",
    sm: "5px",
    md: "6px",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const btnSx: SxProps<Theme> = () => ({
  cursor: "pointer",
  display: {
    xs: "none",
    sm: "flex",
  },
  justifyContent: "center",
  alignItems: "center",
  gap: {
    xs: "4px",
    sm: "5px",
    md: "6px",
  },
  height: {
    xs: "36px",
    sm: "40px",
    md: "44px",
  },
  minWidth: {
    xs: "90px",
    sm: "110px",
    md: "150px",
  },
  border: "1px solid #FF7E70",
  borderLeftColor: "transparent",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
  px: {
    xs: "6px",
    sm: "8px",
    md: "12px",
  },
  fontSize: {
    xs: "13px",
    sm: "14px",
    md: "16px",
  },
  backgroundColor: "#EEEEEE",
  transition: "background-color 0.2s ease-in-out",

  "&:active": {
    backgroundColor: "#FF7E70",
  },
});
