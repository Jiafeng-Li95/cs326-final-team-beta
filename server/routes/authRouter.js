const express = require("express");
const authRouter = express.Router();

authRouter.get("/", function (req, res) {
  res.send("hello authRouter here");
});

//end of file
module.exports = authRouter;
