import type { FC, ReactNode } from "react";
import { Stack } from "@mui/material";
import { HeartIcon } from "../../assets/icons/Heart";
import { iconButtonSx } from "./iconButton.style";
import { ProfileIcon } from "../../assets/icons/Profile";
import { CashIcon } from "../../assets/icons/Cash";

interface Props {
  variant?: "saved" | "sell" | "profile";
  label: string;
  customIcon?: ReactNode;
  onClick?: () => void;
}

export const IconButton: FC<Props> = (props) => {
  const { variant, label, customIcon, onClick } = props;
  const icon = () => {
    switch (variant) {
      case "saved":
        return <HeartIcon />;
      case "profile":
        return <ProfileIcon />;
      case "sell":
        return <CashIcon />;
      default:
        return customIcon;
    }
  };

  return (
    <Stack sx={iconButtonSx} onClick={onClick} style={{ cursor: "pointer" }}>
      {icon && icon()}
      <span>{label}</span>
    </Stack>
  );
};
