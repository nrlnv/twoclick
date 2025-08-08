import type { FC } from "react";
import { Box } from "@mui/material";
import Text from "../../components/Text";
import { containerSx } from "./style";

export const Soon: FC = () => {
  return (
    <Box sx={containerSx}>
      <Text
        preset="h4"
        text="This section is currently under development. Something awesome is coming soon.
Thanks for stopping by!"
      />
    </Box>
  );
};
