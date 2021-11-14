//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const ProductRepository = require("../model/product");

//init the product repo
const productRepository = new ProductRepository(db);

/**
 *
 * @param {*} vendorId number
 * @returns all products by specified vendor
 * T
 */
async function getAllProductsByVendor(vendorId) {
  return await productRepository.findProductsByUserId(vendorId);
}

/**
 *
 * @param {*} productId
 * @returns the product detail
 */
async function getProductById(productId) {
  return await productRepository.findProductByProductId(productId);
}
/**
 *
 * @param {*} product
 * @returns
 */
async function createProduct(product) {
  // product.id = products.length + 1;
  // products.push(product);
  await productRepository.addProduct(product);

  return true;
}

async function deleteProductById(id) {
  return await productRepository.removeProduct(id);
}

async function updateProduct(product) {
  return await productRepository.updateProduct(product);
}

module.exports = {
  getAllProductsByVendor,
  getProductById,
  createProduct,
  deleteProductById,
  updateProduct,
};
