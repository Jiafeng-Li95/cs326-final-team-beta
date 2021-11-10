//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const UserRepository = require("../model/user");

//init the product repo
const userRepository = new UserRepository(db);

function getAllVendor() {
  return vendors;
}

//get vendor by id
function getVendorById(id) {
  let vendor = vendors.filter((vendor) => vendor.userId === id);

  if (vendor.length > 0) {
    return vendor;
  } else {
    return null;
  }
}

//update vendor data
function updateVendorById(vendor) {
  let flag = false;
  vendors.forEach((v, index) => {
    if (v.userId === parseInt(vendor.userId)) {
      flag = true;
      vendors[index] = vendor;
    }
  });
  return flag;
}

// delete vendor data
function deleteVendorById(vendor) {
  let flag = false;
  vendors.forEach((v, index) => {
    if (v.userId === parseInt(vendor.userId)) {
      flag = true;
      console.log(vendor[index]);
      vendors[index] = {};
    }
  });
  return flag;
}

module.exports = {
  getAllVendor,
  getVendorById,
  updateVendorById,
  deleteVendorById,
};
