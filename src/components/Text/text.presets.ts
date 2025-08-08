import { fonts } from "../../assets/fonts/fonts";

export type PresetType =
  | "logo"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "lead"
  | "p"
  | "pBold"
  | "pReg"
  | "button"
  | "support"
  | "supportBold"
  | "smallBold"
  | "smallReg"
  | "small"
  | "sxReg";

export const presets = {
  logo: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 32,
  },

  h1: {
    fontFamily: fonts.montserrat,
    fontWeight: 800,
    fontSize: 48,
  },
  h2: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 30,
  },
  h3: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 24,
    lineHeight: "24px",
  },
  h4: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 20,
  },

  lead: {
    fontFamily: fonts.montserrat,
    fontWeight: 400,
    fontSize: 20,
  },

  p: {
    fontFamily: fonts.montserrat,
    fontWeight: 400,
    fontSize: 16,
  },
  pBold: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 16,
  },
  pReg: {
    fontFamily: fonts.montserrat,
    fontWeight: 500,
    fontSize: 16,
  },

  button: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 16,
  },

  support: {
    fontFamily: fonts.montserrat,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "14px",
  },

  supportBold: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "14px",
  },
  smallBold: {
    fontFamily: fonts.montserrat,
    fontWeight: 600,
    fontSize: 12,
  },
  small: {
    fontFamily: fonts.montserrat,
    fontWeight: 400,
    fontSize: 12,
  },
  smallReg: {
    fontFamily: fonts.montserrat,
    fontWeight: 500,
    fontSize: 12,
  },
  sxReg: {
    fontFamily: fonts.montserrat,
    fontWeight: 500,
    fontSize: 8,
  },
};
