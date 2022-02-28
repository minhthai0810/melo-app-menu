import React from "react";
// Themes
import ui_palette_light from "./themes/light";
import ui_overrides from "./themes/overrides";

// Mui
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  Typography,
  Paper
} from "@mui/material";

// Comps
import AppMenu from "../components/AppMenu";
import { Box } from "@mui/system";

const theme_light = createTheme({
  palette: ui_palette_light,
  ...ui_overrides
});

const FLEX_CSS = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export default function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme_light}>
          <Paper
            sx={(theme) => ({
              margin: theme.spacing(2),
              boxShadow: "none",
              ...FLEX_CSS
            })}
          >
            <Box sx={{ ...FLEX_CSS }}>
              <Typography
                variant="h4"
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightMedium
                })}
                children={"Melo AppMenu"}
              />
              <Typography
                variant="caption"
                sx={(theme) => ({
                  marginTop: theme.spacing(1),
                  color: theme.palette.grey[600]
                })}
                children={"© github.com/minhthai0810"}
              />
            </Box>
            <Box
              sx={(theme) => ({
                width: 480,
                marginTop: theme.spacing(5)
              })}
            >
              <AppMenu />
            </Box>
          </Paper>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}
