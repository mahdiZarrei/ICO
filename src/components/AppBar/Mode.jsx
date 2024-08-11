import * as React from "react";
import { useContext } from "react";
import { IconButton, Box, Tooltip, useTheme } from "@mui/material";
import MainContext from "../../context/index";
import { UilMoon, UilSun } from "@iconscout/react-unicons";
const Mode = () => {
  const theme = useTheme();
  const { handleTheme } = useContext(MainContext);
  return (
    <Box>
      <Tooltip
        title={theme.palette.mode === "dark" ? "LightMode" : "DarkMode"}
        arrow
      >
        <IconButton
          onClick={handleTheme}
          sx={{
            m: "none",
            border: `1px solid `,
            borderRadius: "50%",
          }}
          color="secondary"
        >
          {theme.palette.mode === "dark" ? (
            <UilSun fontSize="medium" />
          ) : (
            <UilMoon />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Mode;
