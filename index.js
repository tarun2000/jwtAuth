const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const port = 3000;

const JWT_SECRET = "JWT_SECRET";

const users = [];

//post route for signup
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userInDB = users.find((user) => user.username === username);
  if (userInDB) {
    return;
  }
  users.push({
    username,
    password,
  });

  console.log(users);

  res.send("signup success");
});

//post route for signin
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((u) => u.username == username && u.password == password);

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.send({
      token,
    });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.authorization;
  const decodeInformation = jwt.verify(token, JWT_SECRET);
  const username = decodeInformation.username;
  const user = users.find((user) => user.username === username);
  if (user) {
    res.send({
      username: user.username,
      password: user.password,
      message: "User is authenticated by JWT",
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});

app.listen(port);
