//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const UserRepository = require("../model/user");

//init the product repo
const userRepository = new UserRepository(db);

async function getAllVendor() {
    return await userRepository.getAllUserInfo();
}

//get vendor by name
async function getVendorByName(name) {
    return await userRepository.getUserInfoByUsername(name);
}

//update vendor data
async function updateVendor(vendor) {
    await userRepository.updateUserInfo(vendor.name, vendor.description, vendor.location, 
        vendor.phoneNumber, vendor.username);
    return true;
}

// delete vendor data
async function deleteVendorById(id) {
    return await userRepository.deleteVendorById(id);
}

module.exports = {
  getAllVendor,
  getVendorByName,
  updateVendor,
  deleteVendorById,
};
