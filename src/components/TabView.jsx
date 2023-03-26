import { makeStyles } from "@material-ui/core";
import React from "react";
import { TabSelector } from "./helper/TabSelector";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    marginTop: 100,
    justifyContent: "center",
  },
}));

const TabView = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <TabSelector>
        <p>All</p>
      </TabSelector>
      <TabSelector>
        <p>Fantasy</p>
      </TabSelector>
      <TabSelector>
        <p>NFT</p>
      </TabSelector>
      <TabSelector>
        <p>Abstra</p>
      </TabSelector>
      <TabSelector>
        <p>Anime</p>
      </TabSelector>
      <TabSelector>
        <p>Games</p>
      </TabSelector>
      <TabSelector>
        <p>Technology</p>
      </TabSelector>
    </nav>
  );
};

export default TabView;
