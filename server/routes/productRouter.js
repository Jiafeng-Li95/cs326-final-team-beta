const express = require("express");
const productRouter = express.Router();
const productService = require("../services/productService");

//get all products by specified vendor
productRouter.get("/all/:vendorId", function (req, res) {
  let vendorId = parseInt(req.params.vendorId);
  let products = productService.getAllProductsByVendor(vendorId);
  products
    ? res.status(200).json(products)
    : res.status(404).json({ message: "vendor not found" });
});
//get product by product id
productRouter.get("/:id", function (req, res) {
  let product = productService.getProductById(parseInt(req.params.id));

  product
    ? res.status(200).json(product)
    : res.status(404).json({ message: "product not found" });
});

//create product to db
productRouter.post("/", function (req, res) {
  let flag = productService.createProduct(req.body);

  //databse test point
  //let flag = productRepository.addProduct(req.body);
  flag
    ? res.status(201).json({ message: "product created" })
    : res.status(409).json({ message: "product already exists" });
});

//delete product from db
productRouter.delete("/:productId", function (req, res) {
  let flag = productService.deleteProductById(parseInt(req.params.productId));

  flag
    ? res.status(200).json({ message: "product deleted" })
    : res.status(409).json({ message: "product does not exists" });
});

//update product to db
productRouter.put("/", function (req, res) {
  let flag = productService.updateProductById(req.body);

  flag
    ? res.status(200).json({ message: "product updated" })
    : res.status(409).json({ message: "product does not exists" });
});

//end of file
module.exports = productRouter;
