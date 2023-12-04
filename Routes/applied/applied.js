const express = require("express");
const router = express.Router();
const applied = require("../../Model/applyschema/appliedjob.js");

router.get("/apply/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const all = await applied.find({ userId: id });
    console.log(all, "ertyuioerty");

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

router.post("/apply", async (req, res) => {
  try {
    console.log(req.body);
    const appl = new applied(req.body);
    const newUser = await appl.save();
    console.log(newUser, "dfghjk");

    return res.status(200).send(appl);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ status: 400, message: error });
  }
});

module.exports = router;
