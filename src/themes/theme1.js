import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const theme1 = createTheme({
  palette: {
    primary: {
      main: "#00E8FC",
      light: "#99E2FF",
      contrastText: "#2D2F35",
    },
    secondary: {
      main: "#F47E52",
      light: "#FDD8CE",
      contrastText: "#601E06",
    },
    info: {
      main: "#CDCAE2",
      dark: "#817BB7",
    },
    success: {
      main: "#5CFFD3",
      light: "#ADFFE9",
      dark: "#00B887",
      contrastText: "#2D2F35",
    },
  },
  typography: {
    body1: {
      color: "#2D2F35",
      fontFamily: "'Poppins', helvetica, sans-serif",
      lineHeight: 1.3,
      fontSize: 16,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: 16,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.15)`,
          "&:hover": {
            boxShadow: `0px 20px 40px rgba(0, 0, 0, 0.25);`,
          },
        },
        containedPrimary: {
          "&:hover": {
            color: "#fff",
            backgroundColor: "#00CEE0",
          },
          "&:focus": {
            backgroundColor: "#00CEE0",
            border: "2px solid #fff",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#F2612C",
            color: "#FFF",
          },
          "&:focus": {
            backgroundColor: "#F2612C",
            border: "2px solid #fff",
          },
        },
        containedSuccess: {
          "&:hover": {
            backgroundColor: "#00B887",
            color: "#FFF",
          },
          "&:focus": {
            backgroundColor: "#00B887",
            border: "2px solid #fff",
          },
        },
        containedInfo: {
          "&:hover": {
            backgroundColor: "#817BB7",
            color: "#FFF",
          },
          "&:focus": {
            backgroundColor: "#817BB7",
            border: "2px solid #fff",
          },
        },
        outlined: {
          boxShadow: "none",
        },
        outlinedPrimary: {
          border: "3px solid #00CEE0",
          color: "#2D2F35",
          "&:hover": {
            border: "3px solid #00CEE0",
            backgroundColor: "#CCFBFF",
          },
          "&:focus": {
            backgroundColor: "#CCFBFF",
          },
        },
        outlinedSecondary: {
          border: "3px solid #F47E52",
          "&:hover": {
            border: "3px solid #F47E52",
            backgroundColor: "#FDD8CE",
          },
          "&:focus": {
            backgroundColor: "#FDD8CE",
          },
        },
        outlinedSuccess: {
          border: "3px solid #00B887",
          color: "#00B887",
          "&:hover": {
            border: "3px solid #00B887",
            backgroundColor: "rgba(122,231,169,0.4)",
          },
          "&:focus": {
            backgroundColor: "rgba(122,231,169,0.4)",
          },
        },
        outlinedInfo: {
          border: "3px solid #817BB7",
          color: "#817BB7",
          "&:hover": {
            border: "3px solid #817BB7",
            backgroundColor: "#CDCAE2",
          },
          "&:focus": {
            backgroundColor: "#CDCAE2",
          },
        },
        root: {
          textTransform: "lowercase",
          borderRadius: 0,
          fontWeight: 700,
          fontSize: "1rem",
          "&:focus": {
            outline: "5px solid #0066ff",
            outlineOffset: "1px",
            borderRadius: 0,
          },
          "&:active": {
            outline: "none",
          },
        },
      },
    },
  },
});