const express = require("express");
const vendorRouter = express.Router();
const vendorService = require("../services/vendorService");

//get all vendors
vendorRouter.get("/all", async function (req, res){
  let vendors = await vendorService.getAllVendor();
  vendors
    ? res.status(200).json(vendors)
    : res.status(404).json({ message: "Cannot get all vendors" });
});

//get vendor by specified id
vendorRouter.get("/:id", async function (req, res){
  //parse the id
  let vendor = await vendorService.getVendorById(req.params.id);
  vendor
    ? res.status(200).json(vendor)
    : res.status(404).json({ message: "vendor not found" });
});

//delete vendor by specified id
//protect by admin
vendorRouter.delete("/:id", async function (req, res){
  let flag = await vendorService.deleteVendorById(parseInt(req.params.id));
  flag
    ? res.status(200).json({ message: "vendor info deleted" })
    : res.status(409).json({ message: "vendor not found" });
})

//update vendor details
vendorRouter.put("/", async function (req, res){
  let flag = vendorService.updateVendor(req.body);
  flag
    ? res.status(200).json({ message: "vendor info updated" })
    : res.status(409).json({ message: "vendor not found" });
});

//end of file
module.exports = vendorRouter;
