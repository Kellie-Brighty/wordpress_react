import { makeStyles } from "@material-ui/core";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginRight: "2rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    lineHeight: "1.25rem",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontFamily: theme.typography.fontFamily,
  },
}));

export const TabSelector = ({ isActive, children, onClick }) => {
  const classes = useStyles();

  const activeStyles = {
    borderBottomWidth: "2px",
    borderColor: "#000",
    outline: "none",
    color: "#fff",
  };

  const inactiveStyles = {
    borderColor: "transparent",
    color: "#8D8D8D",
  };

  return (
    <button
      className={classes.btn}
      onClick={onClick}
      style={isActive ? activeStyles : inactiveStyles}
    >
      {children}
    </button>
  );
};
