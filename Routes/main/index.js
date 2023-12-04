const express = require("express");
const user = require("../user/user.js");
const job = require("../job/job.js");
const apply = require("../applied/applied.js");

const router = express.Router();
router.use("/users", user);
router.use("/jobpost", job);
router.use("/apply", apply);

module.exports = router;
