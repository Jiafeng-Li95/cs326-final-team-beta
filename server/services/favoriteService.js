//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const FavoriteRepository = require("../model/favorite");
//init the product repo
const favoriteRepository = new FavoriteRepository(db);

/**
 *
 * @param {*} userId number
 * @returns all saved products by specified user
 * T
 */
async function getAllProductsByUser(savedUserId) {
  return await favoriteRepository.findFavoritesByUserId(savedUserId);
}

/**
 *
 * @param {*} productId number
 * @param {*} savedUserId number
 * @returns
 */
async function addFavoriteProduct(productId, savedUserId) {
  return await favoriteRepository.addFavorite(productId, savedUserId);
}

module.exports = {
  getAllProductsByUser,
  addFavoriteProduct,
};
