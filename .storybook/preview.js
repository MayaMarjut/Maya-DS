import { addDecorator } from "@storybook/react";
import StylesDecorator from "./styles-decorator";
// import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme1 } from "../src/themes/theme1"

// import Teema from "../src/theme";

// export const decorators = [muiTheme([theme])];
// addDecorator(StylesDecorator);

// configure(require.context("../src/stories", true, /\.stories\.js$/), module);
// addDecorator((story) => <ThemeProvider theme={Teema}>{story()}</ThemeProvider>);

// .storybook/preview.js

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
