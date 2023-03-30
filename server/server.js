const express = require("express");
const app = express();
const port = 8080;

const mysql = require("mysql2");
const bodyParser = require("body-parser");
app.listen(port, ()=>{
  console.log(`running on port ${port}`)
});

// Middlewares
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "192.168.0.101",
  user: "dbuser",
  password: "mypassword",
  database: "wordblog",
});

// routes

app.get("/api/get", (req, res) => {
  const sqlFetch = "SELECT y.name author_name, x.* FROM wordblog.blog_posts x, wordblog.authors y WHERE x.author_id = y.id";
  db.query(sqlFetch, (error, result) => {
    error?res.send(error):res.send(result);
  });
});

console.log("App listening on port", port);
