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
async function loginAuth(body) {
  try {
    let userInfo = await userRepository.findProductsByUsername(body.username);
    //No username is in database
    if (Object.keys(userInfo).length === 0) {
      return false;
    }
    else {
      if (bcrypt.compareSync(body.password, userInfo[0].password)) {
        return true;
      }
      else {
        return false;
      }
    }
  } catch (error) {
    return false;
  }
}

// add new user to the database
async function createUser(body) {
  try {
    const salt = bcrypt.genSaltSync();
    const hashedPwd = bcrypt.hashSync(body.password, salt);
    await userRepository.addUser(body.username, hashedPwd, body.name, body.description, body.location, body.phonenumber, body.isVendor);
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
