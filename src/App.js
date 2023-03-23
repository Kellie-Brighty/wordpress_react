import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const Endpoint = "http://localhost:8080/api/get";

function App() {
  const fetchFromDB = async () => {
    try {
      axios.get(Endpoint).then((res) => {
        console.log(res.data)
      })
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFromDB();
  }, []);
  return (
    <div className="App">
      <p>Hello Wordpress react</p>
    </div>
  );
}

export default App;
