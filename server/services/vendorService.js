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
async function getVendorById(id) {
    return await userRepository.getUserInfoByUsername(id);
}

//update vendor data
async function updateVendor(name, description, location, phoneNumber, username) {
    await userRepository.updateUserInfo(name, description, location, phoneNumber, username);
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
  deleteVendorById,
};
