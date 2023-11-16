const express = require("express");
const user = require("./user.js");
const job = require("./job.js");

const router = express.Router();
router.use("/users", user)
router.use("/jobpost", job)


module.exports = router;