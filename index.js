const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Model/data.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://danyal:danyal@dk.6zdlkec.mongodb.net/SHOP?
retryWrites=true&w=majority`);

app.post("/users", (req, res) => {
  const user = req.body.user;
  console.log({user})
  User.create({ user: user })
    .then((result) => {
      res.status(201).json(result);
    }).catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(8000, () => {
  console.log("server is Running");
});
