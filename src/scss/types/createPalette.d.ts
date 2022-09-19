import { StringOptions } from "sass";
import { StateColor, PinkColor } from "../../theme";

import * as createPalette from "@material-ui/core/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    attention: StateColor;
    pink: PinkColor;
    white: {
      main: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    attention?: StateColor;
    pink?: PinkColor;
    white?: {
      main?: string;
      contrastText?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}
