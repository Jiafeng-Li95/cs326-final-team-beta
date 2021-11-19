//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");

const UserRepository = require("../model/user");
const userRepository = new UserRepository(db);

//get all the vendors
async function getAllVendor() {
    return await userRepository.getAllUserInfo();
}

//get vendor by name
async function getVendorById(id) {
    return await userRepository.getUserInfoById(id);
}

//update vendor data
async function updateVendor(vendor) {
    await userRepository.updateUserInfo(vendor.name, vendor.description, vendor.location, 
        vendor.phoneNumber, vendor.userId);
    return true;
}

// delete vendor data
async function deleteVendorById(id) {
    return await userRepository.deleteVendorById(id);
}

module.exports = {
  getAllVendor,
  getVendorById,
  updateVendor,
  deleteVendorById
};
