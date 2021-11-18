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
async function getAllProductsByUser(userId) {
  return await favoriteRepository.findFavoritesById(userId);
}

// /**
//  *
//  * @param {*} productId
//  * @returns the product detail
//  */
// async function getProductById(productId) {
//   return await productRepository.findProductByProductId(productId);
// }
// /**
//  *
//  * @param {*} product
//  * @returns
//  */
// async function createProduct(product) {
//   // product.id = products.length + 1;
//   // products.push(product);
//   await productRepository.addProduct(product);

//   return true;
// }

// async function deleteProductById(id) {
//   return await productRepository.removeProduct(id);
// }

// async function updateProduct(product) {
//   return await productRepository.updateProduct(product);
// }

module.exports = {
  getAllProductsByUser,
};
