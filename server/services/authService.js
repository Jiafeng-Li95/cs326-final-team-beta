//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const UserRepository = require("../model/user");

//init the product repo
const userRepository = new UserRepository(db);
//bcrypt
const bcrypt = require("bcrypt");

//login authentication
async function loginAuth(password, username) {
  try {
    let userInfo = await userRepository.findProductsByUsername(username);
    //No username is in database
    if (Object.keys(userInfo).length === 0) {
      return false;
    }
    else {
      if (bcrypt.compareSync(password, userInfo[0].password)) {
        console.log("if");
        return true;
      }
      else {
        console.log("else");
        return false;
      }
    }
  } catch (error) {
    return false;
  }
}

// add new user to the database
async function createUser(username, password, name, description, location, phonenumber, isVendor) {
  try {
    const salt = bcrypt.genSaltSync();
    const hashedPwd = bcrypt.hashSync(password, salt);
    await userRepository.addUser(username, hashedPwd, name, description, location, phonenumber, isVendor);
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
