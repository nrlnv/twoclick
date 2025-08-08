import { useState, type FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { TextFieldProps } from "@mui/material";
import { Box, InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "../../assets/icons/Search";
import { adornmentSx, btnSx, inputSx } from "./input.style";
import Text from "../Text";
import { LocationIcon } from "../../assets/icons/Location";
import { Down } from "../../assets/icons/Down";

interface Props extends TextFieldProps<"outlined"> {
  placeholder: string;
  name: string;
}

export const Search: FC<Props> = (props) => {
  const { placeholder, name } = props;
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"recent" | "saved">("recent");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <TextField
            {...field}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            label={""}
            fullWidth
            margin="none"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            onChange={field.onChange}
            value={field.value}
            sx={inputSx}
            InputProps={{
              startAdornment:
                !isFocused && field.value === "" ? (
                  <InputAdornment position="start" sx={adornmentSx}>
                    <SearchIcon />
                    <Text preset="support" text={placeholder} />
                  </InputAdornment>
                ) : null,
            }}
          />
          <Box sx={btnSx} onClick={() => {}}>
            <LocationIcon />
            <Text
              preset="support"
              text="All Locations"
              style={{ color: "black" }}
            />
            <Down />
          </Box>

          {isFocused && field.value === "" && (
            <Box
              maxWidth={"700px"}
              width="100%"
              borderRadius="8px"
              top={50}
              left={0}
              position="absolute"
              minHeight="200px"
              border="0.5px solid #ccc"
              bgcolor="white"
              zIndex={2000}
            >
              {/* Tabs */}
              <Box display="flex" borderBottom="1px solid #ddd">
                <Box
                  flex={1}
                  textAlign="center"
                  py={1}
                  sx={{
                    cursor: "pointer",
                    fontWeight: activeTab === "recent" ? 600 : 400,
                    borderBottom:
                      activeTab === "recent"
                        ? "2px solid #FF7E70"
                        : "2px solid transparent",
                  }}
                  onMouseDown={(e) => e.preventDefault()} // чтобы не терялся фокус
                  onClick={() => setActiveTab("recent")}
                >
                  <Text preset="support">{"Recent Search"}</Text>
                </Box>
                <Box
                  flex={1}
                  textAlign="center"
                  py={1}
                  sx={{
                    cursor: "pointer",
                    fontWeight: activeTab === "saved" ? 600 : 400,
                    borderBottom:
                      activeTab === "saved"
                        ? "2px solid #FF7E70"
                        : "2px solid transparent",
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setActiveTab("saved")}
                >
                  <Text preset="support">{"Saved Search"}</Text>
                </Box>
              </Box>

              {/* Content */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                px={"20px"}
                py={"10px"}
              >
                {activeTab === "recent" &&
                  Array(6)
                    .fill(null)
                    .map((_, i) => (
                      <Box
                        key={i}
                        py="4px"
                        px="8px"
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                        gap={"3px"}
                        sx={{
                          cursor: "pointer",
                          ":hover": {
                            backgroundColor: "#FFF0F0",
                          },
                        }}
                      >
                        <Text preset="support">{"Iphone 16 Pro Max"}</Text>
                        <Text preset="sxReg">{"Phones & Tablets"}</Text>
                      </Box>
                    ))}

                {activeTab === "saved" &&
                  Array(6)
                    .fill(null)
                    .map((_, i) => (
                      <Box
                        key={i}
                        py="4px"
                        px="8px"
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                        gap={"3px"}
                        sx={{
                          cursor: "pointer",
                          ":hover": {
                            backgroundColor: "#FFF0F0",
                          },
                        }}
                      >
                        <Text preset="support">{"Iphone 16 Pro Max"}</Text>
                        <Text preset="sxReg">{"Phones & Tablets"}</Text>
                      </Box>
                    ))}
              </Box>
            </Box>
          )}
        </Box>
      )}
    />
  );
};
