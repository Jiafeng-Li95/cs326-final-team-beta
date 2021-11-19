const express = require("express");
const pageViewRouter = express.Router();
const vendorService = require("../services/vendorService");

//get vendor's page view record by specified id
pageViewRouter.get("/:id", async function (req, res){
    let pv = await vendorService.getVendorById(req.params.id);
    pv
      ? res.status(200).json(vendor)
      : res.status(404).json({ message: "vendor not found" });
  });

//create new record to db
pageViewRouter.post("/:id", async function (req, res) {
    let pv = await vendorService.addPVRecord(req.params.id);
  
    pv
      ? res.status(201).json({ message: "record created successfully" })
      : res.status(409).json({ message: "record create failed" });
});

//update current record for a vendor
pageViewRouter.put("/:id", async function (req, res){
    let pv = await vendorService.updatePageViewById(req.params.id);

    pv
      ? res.status(201).json({ message: "record update successfully" })
      : res.status(409).json({ message: "record update failed" });
});