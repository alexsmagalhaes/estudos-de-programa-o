const express = require("express");

const app = express();
const port = 8081;

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Ola express!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Alex",
      age: 23,
    },
  ];

  res.status(200).json(users);
});

app.listen(port, () => console.log("Server express rodando na porta: ", port));
