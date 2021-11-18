//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const FavoriteRepository = require("../model/favorite");
const favoriteRouter = require("../routes/favoriteRouter");

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

// /**
//  *
//  * @param {*} productId
//  * @returns the product detail
//  */
// async function getProductById(productId) {
//   return await productRepository.findProductByProductId(productId);
// }
/**
 *
 * @param {*} productId
 * @returns
 */
async function addFavoriteProduct(productId, savedUserId) {
  // product.id = products.length + 1;
  // products.push(product);
  await favoriteRepository.addFavorite(productId, savedUserId);

  return true;
}

// async function deleteProductById(id) {
//   return await productRepository.removeProduct(id);
// }

// async function updateProduct(product) {
//   return await productRepository.updateProduct(product);
// }

module.exports = {
  getAllProductsByUser,
  addFavoriteProduct,
};
