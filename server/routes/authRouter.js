const express = require("express");
const authRouter = express.Router();
const authService = require("../services/authService");
const bcrypt = require("bcrypt");

//router for sign in
authRouter.post("/login", async (req, res) => {

  let user = await authService.loginAuth(req.body.password, req.body.username);

  user ? res.status(200).json({ message: "User logged in successfully" })
    : res.status(401).json({ message: "Failed login has happened" });
});

//router for sign up a new user 
authRouter.post("/signup", async (req, res) => {

  let signup = await authService.createUser(req.body.username, req.body.password, req.body.name,
    req.body.description, req.body.location, req.body.phoneNumber, req.body.isVendor);

  signup
    ? res.status(200).json({ message: "User created successfully" })
    : res.status(401).json({ message: "User fail to create" });
});

//end of file
module.exports = authRouter;
