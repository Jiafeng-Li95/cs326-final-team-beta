const express = require("express");
const productRouter = express.Router();

productRouter.get("/", function (req, res) {
  res.send("hello productRouter here");
});

//end of file
module.exports = productRouter;
