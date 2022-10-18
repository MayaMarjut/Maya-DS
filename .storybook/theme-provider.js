import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import LightTheme from "../src/themes/light-theme";

const StylesDecorator = (storyFn) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <StyledThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </StyledThemeProvider>
  </StylesProvider>
);

export default StylesDecorator;
