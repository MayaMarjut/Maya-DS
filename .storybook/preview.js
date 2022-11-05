import { addDecorator } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme1 } from "../src/themes/theme1"

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme1}>
    <CssBaseline/>
    <Story />
  </ThemeProvider>
)
export const decorators = [withMuiTheme];
