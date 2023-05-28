const express = require("express");
const cors = require("cors");
const session = require("express-session");
const db = require("./db_connection");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
  })
);

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
  console.log("SIGN IN SERVER");
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const values = [email, password];
  db.query(sql, values, function (error, results) {
    if (error) throw error;

    if (results.length > 0) {
      // Set session variables for authenticated user
      req.session.user = {
        id: results[0].id,
        name: results[0].name,
        email: results[0].email,
      };

      req.session.authenticated = true;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
});

// Log out
app.get("/api/log-out", (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

// Check authentication
app.get("/api/check-authentication", (req, res) => {
  if (req.session.authenticated && req.session.user) {
    // User is authenticated
    res.sendStatus(200);
  } else {
    // User is not authenticated
    res.sendStatus(401);
  }
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
