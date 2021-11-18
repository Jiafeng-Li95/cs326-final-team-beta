const express = require("express");
const favoriteRouter = express.Router();
const favoriteService = require("../services/favoriteService");

//get all saved products by current user
//TESTED
favoriteRouter.get("/all/:userId", async function (req, res) {
  let favorites = await favoriteService.getAllProductsByUser(req.params.userId);
  favorites
    ? res.status(200).json(favorites)
    : res.status(404).json({ message: "user not found" });
});

// //get product by product id
// //TESTED
// productRouter.get("/:id", async function (req, res) {
//   let product = await productService.getProductById(parseInt(req.params.id));
//   product
//     ? res.status(200).json(product)
//     : res.status(404).json({ message: "product not found" });
// });

// //create product to db
// //TESTED
// productRouter.post("/", async function (req, res) {
//   let product = await productService.createProduct(req.body);

//   product
//     ? res.status(201).json({ message: "product created successfully" })
//     : res.status(409).json({ message: "product create failed" });
// });

// //delete product from db
// //TESTED
// productRouter.delete("/:productId", async function (req, res) {
//   let flag = await productService.deleteProductById(
//     parseInt(req.params.productId)
//   );

//   flag
//     ? res.status(200).json({ message: "product deleted" })
//     : res.status(409).json({ message: "product does not exists" });
// });

// //update product to db
// productRouter.put("/", async function (req, res) {
//   let flag = await productService.updateProduct(req.body);

//   flag
//     ? res.status(200).json({ message: "product updated" })
//     : res.status(409).json({ message: "product does not exists" });
// });

//end of file
module.exports = favoriteRouter;
