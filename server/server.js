const express = require("express");
const app = express();
const port = 8080;

const mysql = require("mysql2");
const bodyParser = require("body-parser");
app.listen(port);

// Middlewares
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "wordpress_with_react",
});

// routes

app.get("/api/get", (req, res) => {
  const sqlFetch = "Select * from wp_posts";
  db.query(sqlFetch, (error, result) => {
    console.log(result);
    return res.status(200).json(result);
  });
});

console.log("App listening on port", port);
