import { makeStyles } from "@material-ui/core";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 100px",
    position: "relative",
  },
  searchBox: {
    background: "#7D41E1",
    height: 170,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blogText: {
    fontFamily: theme.typography.caption,
    color: theme.palette.primary.white,
    fontSize: 30,
    fontWeight: "bold",
  },
  searchDiv: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: theme.palette.primary.white,
    height: 62,
    width: 600,
    boxShadow: "0 0 20px 10px #0000001b",
    borderRadius: 15,
    paddingLeft: 30,
  },
  searchIcon: {
    fontSize: 25,
  },
  input: {
    outline: "none",
    height: "100%",
    width: "100%",
    border: "none",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 30,
    fontSize: 20,
    fontFamily: theme.typography.fontFamily,
  },
}));

const SearchContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.searchBox}>
        <p className={classes.blogText}>Blog</p>
      </div>
      <div className={classes.searchDiv}>
        <RiSearchLine className={classes.searchIcon} />
        <input type="text" placeholder="Search" className={classes.input} />
      </div>
    </div>
  );
};

export default SearchContainer;
