import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import theme from "../src/theme";

const StylesDecorator = (storyFn) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
    </StyledThemeProvider>
  </StylesProvider>
);

export default StylesDecorator;
