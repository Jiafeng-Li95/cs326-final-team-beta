const express = require("express");
const authRouter = express.Router();
const authService = require("../services/authService");
const bcrypt = require("bcrypt");

//get the db connection
const db = require("../db");
//require the productRepo
const UserRepository = require("../model/user");
//init the product repo
const userRepository = new UserRepository(db);

//router for sign in
authRouter.post("/login", async (req, res) => {
  let user = await authService.loginAuth(req.body);

  const userInfo = await userRepository.getUserInfoByUsername(
    req.body.username
  );

  if (user) {
    res.status(200).json(JSON.stringify(userInfo));
  } else {
    res.status(401).json({ message: "Failed login has happened" });
  }
});

//router for sign up a new user
authRouter.post("/signup", async (req, res) => {
  let signup = await authService.createUser(req.body);

  const userInfo = await userRepository.getUserInfoByUsername(
    req.body.username
  );

  signup
    ? res.status(200).json(userInfo)
    : res.status(401).json({ message: "User fail to create" });
});

//end of file
module.exports = authRouter;
