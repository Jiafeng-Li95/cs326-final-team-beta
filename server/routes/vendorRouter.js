const express = require("express");
const vendorRouter = express.Router();
const vendorService = require("../services/vendorService");

vendorRouter.get("/all", (req, res) => {
  let vendors = vendorService.getAllVendor();

  vendors ? res.status(200).json(vendors) : res.status(404);
});

vendorRouter.get("/:id", (req, res) => {
  //parse the id
  let vendors = vendorService.getVendorById(parseInt(req.params.id));

  vendors
    ? res.status(200).json(vendors)
    : res.status(404).json({ message: "vendor not found" });
});

//end of file
module.exports = vendorRouter;
