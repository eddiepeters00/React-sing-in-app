const express = require("express");
const cors = require("cors");
const db = require("./db_connection");

const app = express();
app.use(cors());
app.use(express.json());

// User registration
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  console.log(name, email, password);

  //Insert into mysql db
  db.query("INSERT INTO users SET ?", user, (err, results) => {
    if (err) {
      res.status(500).send("Error creating new user");
      return;
    } else {
      console.log("New user created with id: ", results.insertId);
    }
  });

  res.status(200);
});

// User sign-in
app.post("/api/sign-in", (req, res) => {
  console.log("Signing in");
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const values = [email, password];
  db.query(sql, values, function (error, results) {
    if (error) throw error;

    if (results.length > 0) {
      console.log("Found user");
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
});

//Get all users
app.get("/api/getAllUsers", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      res.json(results);
    }
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
