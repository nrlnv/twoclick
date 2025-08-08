import type { FC } from "react";
import { Button as MUIButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { buttonSx } from "./button.style";

interface Props extends ButtonProps {
  label: string;
}

export const Button: FC<Props> = (props) => {
  const { label } = props;
  return (
    <MUIButton variant="contained" color="primary" sx={buttonSx} {...props}>
      {label}
    </MUIButton>
  );
};
