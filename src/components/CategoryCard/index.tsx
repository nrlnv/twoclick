import { type FC, useState } from "react";
import {
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import Text from "../Text";
import { cardContainerSx, cardImageSx } from "./style";
import { menu } from "../Selector/menu";
import { VehicleIcon } from "../../assets/icons/category/vehicle";
import { useNavigate } from "react-router-dom";

interface Props {
  label: string;
  icon: string;
}

export const CategoryCard: FC<Props> = ({ label, icon }) => {
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleCardClick = (event: React.MouseEvent<HTMLElement>) => {
    setSubmenuAnchorEl(event.currentTarget);
    setSubmenuOpen(true);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(false);
    setSubmenuAnchorEl(null);
  };

  const currentSubMenu =
    menu.find((option) => option.name === label)?.subMenu || [];

  return (
    <>
      <Box sx={cardContainerSx} onClick={handleCardClick}>
        <Box component="img" src={icon} alt={label} sx={cardImageSx} />
        <Text preset="smallBold" text={label} style={{ textAlign: "center" }} />
      </Box>

      <Popper
        open={submenuOpen}
        anchorEl={submenuAnchorEl}
        placement="right-start"
        transition
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 5],
            },
          },
        ]}
        style={{
          zIndex: 1302,
        }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper
              sx={{
                background: "rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                px: "8px",
                py: "16px",
              }}
            >
              <ClickAwayListener onClickAway={handleSubmenuClose}>
                <MenuList sx={{ p: 0 }}>
                  {currentSubMenu.map((subOption) => (
                    <MenuItem
                      key={subOption.name}
                      onClick={() => {
                        console.log("clicked:", subOption.name);
                        handleSubmenuClose();
                        navigate("/soon");
                      }}
                      sx={{
                        cursor: "pointer",

                        px: "12px",
                        gap: "10px",
                        ":hover": {
                          transform: "scale(1.01)",
                          backgroundColor: "#FFF0F0",
                        },
                      }}
                    >
                      <VehicleIcon />
                      <Text preset="smallReg" text={subOption.name} />
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
