import type { FC } from "react";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import {
  actionsContainerSx,
  headerContainerSx,
  searchContainerSx,
} from "./header.style";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Search } from "../Search";

//yup
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSchema } from "../../schemas/search";
import { Logo } from "../../assets/icons/Logo";
import { Selector } from "../Selector";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const methods = useForm({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      searchItemName: "",
    },
  });

  const navigate = useNavigate();
  return (
    <FormProvider {...methods}>
      <Box sx={headerContainerSx}>
        <Box width={"70px"}>
          <Logo style={{ cursor: "pointer" }} onClick={() => navigate("/")} />
        </Box>
        <Box sx={searchContainerSx}>
          <Selector />
          <Search
            placeholder="Find anything in 2Clicks"
            variant="outlined"
            name="searchItemName"
          />
          <Button label="Search" />
        </Box>
        <Box sx={actionsContainerSx}>
          <IconButton
            label="Saved"
            variant="saved"
            onClick={() => navigate("/soon")}
          />
          <IconButton
            label="Sell"
            variant="sell"
            onClick={() => navigate("/soon")}
          />
          <IconButton
            label="Profile"
            variant="profile"
            onClick={() => navigate("/soon")}
          />
        </Box>
      </Box>
    </FormProvider>
  );
};
