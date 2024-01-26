const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/people", (req, res) => {
  const q = "SELECT * FROM people";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/api/people/:id", (req, res) => {
  const q = "SELECT * FROM people WHERE id = ?";
  //   const params = { id: req.params.id };
  const { id } = req.params;

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return data;
  });
});

app.post("/api/people", (req, res) => {
  const q = "INSERT INTO people (name, age) VALUES (?, ?)";
  //   const params = { name: req.body.name, age: req.body.age };
  //   const paramsArray = Object.values(params);

  const { name, age } = req.body;

  db.query(q, [name, age], (err, results) => {
    if (err) return res.json(err);
    return res.status(200, "People successfully added");
  });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM people WHERE id = ?";
  db.query(q, [id], (err, results) => {
    if (err) return res.json(err);
    return res.status(200, "People successfully deleted");
  });
});

app.listen(8000, () => console.log("Connection open on port 8000!"));
