import React from "react";
import { presets } from "./text.presets";
import type { PresetType } from "./text.presets";
import { Typography } from "@mui/material";

interface TextProps {
  preset?: PresetType;
  children?: React.ReactNode;
  text?: string;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = (props) => {
  const { preset = "p", children, text = "this is text", style } = props;

  const content = children || text;
  return (
    <Typography
      component={"span"}
      sx={{ color: "black", ...presets[preset], ...style }}
    >
      {content}
    </Typography>
  );
};

export default Text;
