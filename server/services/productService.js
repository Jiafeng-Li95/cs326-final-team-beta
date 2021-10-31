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

/**
 *
 * @param {*} vendorId number
 * @returns all products by specified vendor
 */
function getAllProductsByVendor(vendorId) {
  return products.filter((product) => product.userId === vendorId);
}

//this console is for knowing the data at runtime, then we can use it for testing the endpoint
console.log(products);
function getProductById(productId) {
  let product = products.filter((product) => product.id === productId);
  if (product.length() > 0) {
    return product;
  } else {
    return null;
  }
}

function createProduct(product) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === product.id) {
      return false;
    }
  }
  products.push(product);
  return true;
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
  //get the user Id =
}

module.exports = {
  getAllProductsByVendor,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById,
};
