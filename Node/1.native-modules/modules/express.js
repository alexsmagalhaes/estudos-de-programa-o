const User = require("../src/models/users.model");

const express = require("express");

const app = express();
const port = 8081;

app.json();
app.set("view engine", "ejs");
app.set("views", "../src/views");

app.get("/views/users", async (req, res) => {
  const users = await User.find({});
  
  res.render("index", { users });
});

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Ola express!</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => console.log("Server express rodando na porta: ", port));
