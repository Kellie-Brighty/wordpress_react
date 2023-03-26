import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";

const Endpoint = "http://localhost:8080/api/get";

function App() {
  const fetchFromDB = async () => {
    try {
      axios.get(Endpoint).then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFromDB();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
