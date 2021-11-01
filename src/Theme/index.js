import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      input: {
        [breakpoints.down("sm")]: {
          padding: 12,
          fontSize: 14,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: 20,
      },
    },
    MuiContainer:{
      fixed:{
        paddingBottom:10,
        [breakpoints.down("sm")]:{
          maxWidth:"600px",
          },
        [breakpoints.down("xs")]:{
        maxWidth:"240px",
        }
      },
    },
  },
  palette: {
    primary: {
      main: "#4caf50",
      contrastText: "#000",
    },
    secondary: {
      main: "#00e676",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#f5f5f5",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      paper: "#fafafa",
    },
  },
  breakpoints: {
    values: {
      xs: 200,
      sm: 500,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});
