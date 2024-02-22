const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8000, () => console.log("Connection open on port 8000!"));
