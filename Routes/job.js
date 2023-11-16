const express = require("express");
const router = express.Router();
const jobs = require("../Model/jobdata.js");

router.post("/job", async (req, res) => {
  try {
    console.log(req.body);
    const jobed = new jobs(req.body);
    const newUser = await jobed.save();
    return res.status(200).send({
      status: "succes",
      message: "job posted",
    });
  } catch (error) {
    return res.status(400).send({ status: 400, message: error });
  }
});

router.get("/jobs", async (req, res) => {
  try {
    const allJobs = await jobs.find();
    
    return res.status(200).send({
      status: "success",
      jobs: allJobs, 
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: error.message, 
    });
  }
});
 

module.exports = router;
