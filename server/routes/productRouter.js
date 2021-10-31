const express = require("express");
const productRouter = express.Router();
const productService = require("../services/productService");

//get all products by specified vendor
productRouter.get("/all/:vendorId", function (req, res) {
  let vendorId = parseInt(req.params.vendorId);
  let products = productService.getAllProductsByVendor(vendorId);
  return products
    ? res.status(200).json(products)
    : res.status(404).json({ message: "vendor not found" });
});

//get product by product id
productRouter.get("/:id", function (req, res) {
  let product = productService.getProductById(parseInt(req.params.id));

  return product
    ? res.status(200).json(product)
    : res.status(404).json({ message: "product not found" });
});

//create product to db
productRouter.post("/", function (req, res) {
  let flag = productService.createProduct(req.body);

  flag
    ? res.status(201).json({ message: "product created" })
    : res.status(409).json({ message: "product already exists" });
});

//delete product from db
productRouter.delete("/:productId", function (req, res) {});

//update product to db
productRouter.put("/", function (req, res) {});

//end of file
module.exports = productRouter;
