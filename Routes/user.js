const express = require("express");
const router = express.Router();
const User = require("../Model/data.js");





router.get("/login/:id", async (req, res) => {
  try {
    const { id }=req.params;

    const all = await User.find({_id:id});
    
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
    const user =  new User(req.body);
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
    let user = await User.findOne(req.body);
    console.log("first", user);
    if (user) {
      return res.status(200).json(user);
    } else {
      res.status(400).send("result: no user found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
