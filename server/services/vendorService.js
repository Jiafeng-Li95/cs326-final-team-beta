//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");

// User repository
const UserRepository = require("../model/user");
const userRepository = new UserRepository(db);

// Like repository
const LikeRepository = require("../model/like");
const likeRepository = new LikeRepository(db);

// View repository
const ViewRepository = require("../model/viewed");
const viewRepository = new ViewRepository(db);

// Vendor page
// get all the vendors
async function getAllVendor() {
  return await userRepository.getAllUserInfo();
}

// get vendor by name
async function getVendorById(id) {
  return await userRepository.getUserInfoById(id);
}

// update vendor data
async function updateVendor(vendor) {
  await userRepository.updateUserInfo(
    vendor.name,
    vendor.description,
    vendor.location,
    vendor.phoneNumber,
    vendor.userId
  );
  return true;
}

// delete vendor data
async function deleteVendorById(id) {
  return await userRepository.deleteVendorById(id);
}

// Like Event
// Like => add Like
async function addLike(vendor_id, like_number) {
  try {
    await likeRepository.addLike(vendor_id, like_number);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// Like => get like by vendor id
async function getLikeInfoByVendorId(id) {
  return await likeRepository.getLikeInfoByVendorId(id);
}

// Like => update Like number
async function updateLikeInfo(vendor_id, like_number) {
  try {
    await likeRepository.updateLikeInfo(vendor_id, like_number);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// View Event
//add new page view record for a new vendor
async function addPVRecord(pv) {
  try {
    await viewRepository.addUser(pv);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

//get page view by id
async function getPageViewById(id) {
  return await viewRepository.getNumClickedById(id);
}

//update page view by id
async function updatePageViewById(pv) {
  return await viewRepository.updateViewInfo(pv);
}

module.exports = {
  getAllVendor,
  getVendorById,
  updateVendor,
  deleteVendorById,
  addLike,
  getLikeInfoByVendorId,
  updateLikeInfo,
  addPVRecord,
  getPageViewById,
  updatePageViewById,
};
