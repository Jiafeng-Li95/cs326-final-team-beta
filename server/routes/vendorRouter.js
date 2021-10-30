const express = require("express");
const vendorRouter = express.Router();

vendorRouter.get("/", function (req, res) {
  res.send("hello vendorRouter here");
});

//end of file
vendorRouter.module.exports = vendorRouter;
