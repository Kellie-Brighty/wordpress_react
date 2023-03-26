import { makeStyles } from "@material-ui/core";
import React from "react";
import { FaBehance } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { globalStyles } from "../store/theme";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily,
    justifyContent: "space-between",
    padding: "40px 100px",
  },
  logoContainer: {
    "& h3": {
      fontSize: 30,
    },
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    fontWeight: "600",
    "& p": {
      cursor: "pointer",
    },
  },
  options: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    cursor: "pointer",
  },
  contactBtn: {
    backgroundImage: "linear-gradient(to right, #57b9ff, #228FF6)",
    padding: "15px 40px",
    borderRadius: 50,
    color: theme.palette.primary.white,
    fontWeight: "500",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <h3>Logo</h3>
      </div>

      <div className={classes.linkContainer}>
        <p>Services</p>
        <p style={globalStyles.spaceXFifty}>Creative Studio</p>
        <p style={globalStyles.spaceXFifty}>Blog</p>
        <p style={globalStyles.spaceXFifty}>About us</p>
      </div>

      <div className={classes.options}>
        <FaBehance className={classes.icon} />
        <RiBasketballLine
          style={globalStyles.spaceXFive}
          className={classes.icon}
        />
        <div className={classes.contactBtn} style={globalStyles.spaceXFive}>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
