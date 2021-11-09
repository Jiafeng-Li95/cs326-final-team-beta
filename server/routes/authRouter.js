const express = require("express");
const authRouter = express.Router();
const authService = require("../services/authService");

//router for sign in
authRouter.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = authService.checkLoginExist(password, username);

  user ? res.status(200).json(user)
    : res.status(401).json({ message: "Failed login has happened" });
});

//router for sign up a new user 
authRouter.post("/signup", async (req, res) => {
  let username = req.body.username;
  // authService.checkNameExist(username).then((user) => {
  //   console.log(user);
  // });

  // if (authService.checkNameExist(username)) {
  //   return res.status(401).json({ message: "Unauthorized client error status" });
  // }
  // else {
  let signupStatus = await authService.createUser(req.body.username, req.body.password, req.body.name,
    req.body.description, req.body.location, req.body.phoneNumber, req.body.isVendor);

  signupStatus
    ? res.status(200).json({ message: "User created successfully" })
    : res.status(401).json({ message: "Failed login has happened" });
  // return res.status(200).json({ message: "Created a new user" });
  // }
});

//end of file
module.exports = authRouter;
