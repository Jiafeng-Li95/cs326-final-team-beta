const express = require("express");
const favoriteRouter = express.Router();
const favoriteService = require("../services/favoriteService");

//get all saved products by current user
//TESTED
favoriteRouter.get("/all/:savedUserId", async function (req, res) {
  let favorites = await favoriteService.getAllProductsByUser(
    req.params.savedUserId
  );
  favorites
    ? res.status(200).json(favorites)
    : res.status(404).json({ message: "user not found" });
});

//add saved product to favorites table
//TESTED
favoriteRouter.post("/", async function (req, res) {
  let favorites = await favoriteService.addFavoriteProduct(
    req.body.productId,
    req.body.savedUserId
  );

  favorites
    ? res.status(201).json({ message: "added item successfully" })
    : res.status(409).json({ message: "add failed" });
});

//end of file
module.exports = favoriteRouter;
