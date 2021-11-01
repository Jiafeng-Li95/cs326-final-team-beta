const express = require("express");
const authRouter = express.Router();
const authService = require("../services/authService");


const userInfo = [];

authRouter.post("/login", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (authService.checkLoginExist(userInfo, password, username)) {
    res.send(true);
  } else {
    res.send(false);
  }

});

authRouter.post("/signup", async (req, res) => {
  if (authService.checkNameExist(userInfo, req.body.username)) {
    res.send(false);
  }
  else {
    userInfo.push({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      phonenumber: req.body.phonenumber,
      isVendor: req.body.isVendor
    })
    res.send(true);
  }
});

//end of file
module.exports = authRouter;
