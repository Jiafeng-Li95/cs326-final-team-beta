//put this at end of the this file
//remember add the function inside this {}
let faker = require("faker");

//fake vendor data
let vendors = new Array(15).fill(null).map((vendor, index) => {
  return (vendor = {
    name: faker.company.companyName(),
    description: faker.lorem.words(),
    location: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber(),
    userId: index,
  });
});
//this for testing purpose
console.log(vendors);

function getAllVendor() {
  return vendors;
}

function getVendorById(id) {
  let vendor = vendors.filter((vendor) => vendor.userId === id);

  if (vendor.length > 0) {
    return vendor;
  } else {
    return null;
  }
}

module.exports = { getAllVendor, getVendorById };
