//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");

const UserRepository = require("../model/user");
const userRepository = new UserRepository(db);

const ViewRepository = require("../model/viewed");
const viewRepository = new ViewRepository(db);

//get all the vendors
async function getAllVendor() {
    return await userRepository.getAllUserInfo();
}

//add new page view record for a new vendor
async function addPVRecord(id){
    await viewRepository.addUser(id);
    return true;
}

//get page view by id
async function getPageViewById(id){
    return await viewRepository.getNumClickedById(id);
}

//update page view by id
async function updatePageViewById(pv, id){
    await viewRepository.updateViewInfo(pv, id);
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
  deleteVendorById,
  getPageViewById,
  updatePageViewById,
  addPVRecord
};
