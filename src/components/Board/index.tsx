import type { FC } from "react";
import { Box } from "@mui/material";
import { boardContainerSx } from "./board.style";
import { Board as BoardIcon } from "../../assets/icons/Board";
export const Board: FC = () => {
  return (
    <Box sx={boardContainerSx}>
      <BoardIcon />
    </Box>
  );
};
