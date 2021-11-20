const express = require("express");
const vendorRouter = express.Router();
const vendorService = require("../services/vendorService");

//get all vendors
vendorRouter.get("/all", async function (req, res) {
  let vendors = await vendorService.getAllVendor();
  vendors
    ? res.status(200).json(vendors)
    : res.status(404).json({ message: "Cannot get all vendors" });
});

//get vendor by specified id
vendorRouter.get("/:id", async function (req, res) {
  //parse the id
  let vendor = await vendorService.getVendorById(req.params.id);
  vendor
    ? res.status(200).json(vendor)
    : res.status(404).json({ message: "vendor not found" });
});

//delete vendor by specified id
//protect by admin
vendorRouter.delete("/:id", async function (req, res) {
  let flag = await vendorService.deleteVendorById(parseInt(req.params.id));
  flag
    ? res.status(200).json({ message: "vendor info deleted" })
    : res.status(409).json({ message: "vendor not found" });
});

//update vendor details
vendorRouter.put("/", async function (req, res) {
  let flag = vendorService.updateVendor(req.body);
  flag
    ? res.status(200).json({ message: "vendor info updated" })
    : res.status(409).json({ message: "vendor not found" });

});

// Like Event  
// Like => Add new Like with vendor id 
vendorRouter.post("/like", async function (req, res) {
  let flag = vendorService.addLike(req.body.vendor_id, req.body.like_number);
  flag
    // ? res.status(200).json({ message: "like Added successfully" })
    ? res.status(200).json({ message: "Like added" })
    : res.status(409).json({ message: "vendor id not found" })
});

// Like => get Like number by vendor id 
vendorRouter.get("/like/:id", async function (req, res) {
  let like = await vendorService.getLikeInfoByVendorId(req.params.id);
  like
    ? res.status(200).json(like)
    : res.status(409).json({ message: "Like not found" })
});

// Like => update Like number by vendor id
vendorRouter.put("/like", async function (req, res) {
  let flag = vendorService.updateLikeInfo(req.body.vendor_id, req.body.like_number);
  flag
    ? res.status(200).json({ message: "Like info updated" })
    : res.status(409).json({ message: "Like not found" });
});


// View Event 
//get vendor's page view record by specified id
vendorRouter.get("/view/:id", async function (req, res) {
  let pv = await vendorService.getPageViewById(req.params.id);
  pv
    ? res.status(200).json(pv)
    : res.status(404).json({ message: "vendor not found" });
});

//create new record to db
vendorRouter.post("/view", async function (req, res) {
  let pv = await vendorService.addPVRecord(req.body);
  pv
    ? res.status(200).json({ message: "record created successfully" })
    : res.status(409).json({ message: "record create failed" });
});

//update current record for a vendor
vendorRouter.put("/view", async function (req, res) {
  let pv = await vendorService.updatePageViewById(req.body);
  pv
    ? res.status(201).json({ message: "record update successfully" })
    : res.status(409).json({ message: "record update failed" });
});

//end of file
module.exports = vendorRouter;
