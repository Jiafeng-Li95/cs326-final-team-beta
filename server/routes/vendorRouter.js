const express = require("express");
const vendorRouter = express.Router();
const vendorService = require("../services/vendorService");

//get all vendors
vendorRouter.get("/all", (req, res) => {
  let vendors = vendorService.getAllVendor();

  vendors ? res.status(200).json(vendors) : res.status(404);
});

//get vendor by specified id
vendorRouter.get("/:id", (req, res) => {
  //parse the id
  let vendors = vendorService.getVendorById(parseInt(req.params.id));

  vendors
    ? res.status(200).json(vendors)
    : res.status(404).json({ message: "vendor not found" });
});

//delete vendor by specified id
//protect by admin
//will implement when we have authoirzation imp
vendorRouter.delete("/:id", (req, res) => {
  let vendor = vendorService.deleteVendorById(req.body)
  vendor
    ? res.status(200).json({ message: "vendor info delete" })
    : res.status(409).json({ message: "vendor not found" });
})

//update vendor details
vendorRouter.put("/", (req, res) => {
  vendorService.updateVendorById(req.body)
    ? res.status(200).json({ message: "vendor info updated" })
    : res.status(409).json({ message: "vendor not found" });
});

//end of file
module.exports = vendorRouter;
