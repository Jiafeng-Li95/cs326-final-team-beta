const express = require("express");
const authRouter = express.Router();
const authService = require("../services/authService");


authRouter.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = authService.checkLoginExist(password, username);

  user ? res.status(200).json(user)
    : res.status(401).json({ message: "Failed login has happened" });
});

authRouter.post("/signup", async (req, res) => {
  let username = req.body.username;

  if (authService.checkNameExist(username)) {
    return res.status(401).json({ message: "Unauthorized client error statu" });
  }
  else {
    authService.pushUserInfo(req.body.username, req.body.password, req.body.name,
      req.body.description, req.body.location, req.body.phonenumber, req.body.isVendor);
    return res.status(200).json(true);
  }
});

//end of file
module.exports = authRouter;
