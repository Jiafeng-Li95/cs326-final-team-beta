//put this at end of the this file
//remember add the function inside this {}
<<<<<<< Updated upstream
let vendors = require("../faker_data");
//this for testing purpose
console.log(vendors);
=======

//get the db connection
const db = require("../db");
const ProductRepository = require("../model/product");
//require the productRepo
const UserRepository = require("../model/user");

//init the product repo
const productRepository = new ProductRepository(db);
const userRepository = new UserRepository(db);
>>>>>>> Stashed changes

async function getAllVendor() {
    return await userRepository.getAllUserInfo();
}

//get vendor by name
async function getVendorByName(name) {
    return await userRepository.getUserInfoByUsername(name);
}

//update vendor data
async function updateVendorById(vendor) {
    await userRepository.updateUserInfo(vendor.name, vendor.description, vendor.location, 
      vendor.phoneNumber, vendor.username);
    return true;
}

// delete vendor data
async function deleteVendorById(vendor) {
    return await userRepository.deleteVendorById(vendor.id);
}

<<<<<<< Updated upstream
module.exports = { getAllVendor, getVendorById, updateVendorById, deleteVendorById };
=======
module.exports = {
  getAllVendor,
  getVendorByName,
  updateVendorById,
  deleteVendorById,
};
>>>>>>> Stashed changes
