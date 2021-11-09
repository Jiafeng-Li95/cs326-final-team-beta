//put this at end of the this file
//remember add the function inside this {}
let faker = require("faker");

//fake datas
let products = new Array(15).fill(null).map((product, index) => {
  return (product = {
    id: faker.datatype.number(),
    name: faker.animal.fish(),
    description: faker.lorem.words(),
    userId: index,
  });
});

//add few more fake datas here
products.push(
  {
    id: faker.datatype.number(),
    name: faker.animal.fish(),
    description: faker.lorem.words(),
    userId: 1,
  },
  {
    id: faker.datatype.number(),
    name: faker.animal.fish(),
    description: faker.lorem.words(),
    userId: 1,
  },
  {
    id: faker.datatype.number(),
    name: faker.animal.fish(),
    description: faker.lorem.words(),
    userId: 1,
  },
  {
    id: faker.datatype.number(),
    name: faker.animal.fish(),
    description: faker.lorem.words(),
    userId: 1,
  },
  {
    id: faker.datatype.number(),
    name: faker.animal.fish(),
    description: faker.lorem.words(),
    userId: 1,
  }
);

//get the db connection
const db = require("../db");
//require the productRepo
const ProductRepository = require("../model/product");

//init the product repo
const productRepository = new ProductRepository(db);

//TODO: using database operation to replace the logic

/**
 *
 * @param {*} vendorId number
 * @returns all products by specified vendor
 * T
 */
function getAllProductsByVendor(vendorId) {
  return productRepository.findProductsByUserId(vendorId);
}

async function getProductById(productId) {
  return await productRepository.findProductByProductId(productId);
}

function createProduct(product) {
  // product.id = products.length + 1;
  // products.push(product);
  return productRepository.addProduct(product);
}

function deleteProductById(id) {
  //check if product in the database
  let flag = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      flag = true;
    }
  }

  //if in the database, filter out the given id
  if (flag) {
    products = products.filter((product) => {
      return product.id !== id;
    });
    return true;
  } else {
    return false;
  }
}

function updateProductById(product) {
  let flag = false;
  //get the product Id
  let id = product.id;
  products.forEach((p, index) => {
    if (p.id === id) {
      products[index] = product;
      flag = true;
    }
  });

  return flag;
}

module.exports = {
  getAllProductsByVendor,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById,
};
