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

module.exports = { getAllProductsByVendor };
