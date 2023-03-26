import React from "react";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import TabView from "../components/TabView";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchContainer />
      <TabView />
    </div>
  );
};

export default Home;
