import * as React from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import { menu } from "./menu";
import { buttonSx } from "./style";
import { Down } from "../../assets/icons/Down";
import Text from "../Text";
import { VehicleIcon } from "../../assets/icons/category/vehicle";
import { useNavigate } from "react-router-dom";
import { RightIcon } from "../../assets/icons/Right";

export const Selector = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [submenuOpen, setSubmenuOpen] = React.useState(false);
  const [currentOption, setCurrentOption] = React.useState<string>("");

  const navigate = useNavigate();

  const handleMainClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMainClose = () => {
    setAnchorEl(null);
    handleSubmenuClose();
  };

  const handleOptionClick = (
    event: React.MouseEvent<HTMLElement>,
    name: string
  ) => {
    if (currentOption === name && submenuOpen) {
      handleSubmenuClose();
      return;
    }

    setSubmenuAnchorEl(event.currentTarget);
    setSubmenuOpen(true);

    requestAnimationFrame(() => {
      setCurrentOption(name);
    });

    console.log("option:", name);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(false);
    setSubmenuAnchorEl(null);
    setCurrentOption("");
  };

  const handleSubOptionClick = (path: string) => {
    console.log("clicked");
    navigate(path);
    setAnchorEl(null);
    setSubmenuOpen(false);
    setCurrentOption("");
  };

  return (
    <div>
      <Button sx={buttonSx} onClick={handleMainClick}>
        <Text
          preset="support"
          text="All Categories"
          style={{ color: "black" }}
        />
        <Down />
      </Button>

      <Menu
        sx={{
          marginTop: "10px",
          borderRadius: "8px",
          padding: "8px",
          gap: "8px",
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMainClose}
      >
        {menu.map((option) => (
          <MenuItem
            key={option.name}
            onClick={(e) => handleOptionClick(e, option.name)}
            sx={{
              width: "280px",
              cursor: "pointer",
              marginX: "8px",
              px: "12px",
              gap: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& .right-icon": {
                opacity: 0,
                transition: "opacity 0.2s",
              },
              ":hover": {
                transform: "scale(1.01)",
                backgroundColor: "#FFF0F0",
                "& .right-icon": {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {option.icon ?? <VehicleIcon />}
              <Text preset="smallReg" text={option.name} />
            </Box>
            <RightIcon className="right-icon" />
          </MenuItem>
        ))}
      </Menu>

      <Menu
        open={submenuOpen}
        anchorEl={submenuAnchorEl}
        onClose={handleSubmenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ marginLeft: "15px" }}
        MenuListProps={{
          sx: {
            px: "12px",
            py: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          },
        }}
      >
        {menu
          .find((option) => option.name === currentOption)
          ?.subMenu.map((subOption, i) => (
            <MenuItem
              key={i}
              onClick={() => handleSubOptionClick("/soon")}
              sx={{
                p: 0,
                px: "12px",
                cursor: "pointer",
                width: "267px",
                gap: "16px",
                ":hover": {
                  backgroundColor: "#FFF0F0",

                  transform: "scale(1.01)",
                },
              }}
            >
              {menu.find((option) => option.name === currentOption)?.icon ?? (
                <VehicleIcon />
              )}
              <Text preset="smallReg" text={subOption.name} />
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};
