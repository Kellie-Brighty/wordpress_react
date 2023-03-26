import { createTheme } from "@material-ui/core";

export const themes = createTheme({
  palette: {
    primary: {
      main: "#73F49D",
      white: "#F9F9F9",
    },
    secondary: {
      main: "#85878D",
    },
    otherColors: {
      background: "#F5F5F5",
      text_ash: "#6B6B6B",
    },
  },
  typography: {
    fontFamily: "Alegreya Sans",
  },
});

export const globalStyles = {
  spaceXFive: {
    marginRight: "calc(1.25rem * 0)",
    marginLeft: "calc(1.25rem * calc(1 - 0))",
  },
  spaceXFifty: {
    marginRight: "calc(50px * 0)",
    marginLeft: "calc(50px * calc(1 - 0))",
  },
};
