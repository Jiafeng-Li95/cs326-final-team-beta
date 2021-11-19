const express = require("express");
const pageViewRouter = express.Router();
const pageViewService = require("../services/pageViewService");

//get vendor's page view record by specified id
pageViewRouter.get("/:id", async function (req, res){
    let pv = await pageViewService.getPageViewById(req.params.id);
    pv
      ? res.status(200).json(pv)
      : res.status(404).json({ message: "vendor not found" });
  });

//create new record to db
pageViewRouter.post("/", async function (req, res) {
    let pv = await pageViewService.addPVRecord(req.body);
  
    pv
      ? res.status(201).json({ message: "record created successfully" })
      : res.status(409).json({ message: "record create failed" });
});

//update current record for a vendor
pageViewRouter.put("/", async function (req, res){
    let pv = await pageViewService.updatePageViewById(req.body);

    pv
      ? res.status(201).json({ message: "record update successfully" })
      : res.status(409).json({ message: "record update failed" });
});

module.exports = pageViewRouter;