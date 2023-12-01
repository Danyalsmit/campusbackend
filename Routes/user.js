const express = require("express");
const router = express.Router();
const User = require("../Model/data.js");
const bcrypt = require("bcrypt");

router.get("/admin", async (req, res) => {
  try {
    const all = await User.find();

    return res.status(200).send({
      status: "success",
      users: all,
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
});

router.get("/login/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const all = await User.find({ _id: id });

    return res.status(200).send({
      status: "success",
      user: all,
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: error.message,
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const password = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password });
    const newUser = await user.save();
    return res.status(200).send({
      status: "succes",
      message: "your account is created",
    });
  } catch (error) {
    return res.status(400).send({ status: 400, message: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ status: 403, message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).send({ status: 403, message: "Invalid password" });
    }

    // Password matches, so you can proceed with successful login
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
