//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const UserRepository = require("../model/user");

// //init the product repo
const userRepository = new UserRepository(db);

//login authentication
async function loginAuth(password, username) {
  try {
    let userInfo = await userRepository.findProductsByUsername(username);
    //No username is in database
    if (Object.keys(userInfo).length === 0) {
      return false;
    }
    else {
      if (userInfo[0].password !== password) {
        return false;
      }
    }
  } catch (error) {
    return false;
  }
  return true;
}

// add new user to the database
async function createUser(username, password, name, description, location, phonenumber, isVendor) {
  try {
    await userRepository.addUser(username, password, name, description, location, phonenumber, isVendor);
  }
  catch (error) {
    return false;
  }
  return true;
}

module.exports = {
  loginAuth,
  createUser,
};
