//put this at end of the this file
//remember add the function inside this {}

//get the db connection
const db = require("../db");
//require the productRepo
const UserRepository = require("../model/user");

// //init the product repo
const userRepository = new UserRepository(db);

const userInfo = require("../faker_data");
let userId = 0;

// async function checkNameExist(username) {
//   // let checkNameExist = false;
//   // console.log(userRepository.findProductsByUsername(username));

//   // userInfo.forEach((e) => {
//   //   checkNameExist = e.username === username ? true : false;
//   // });
//   // if (checkNameExist) return true;
//   // else return false;
//   return await userRepository.findProductsByUsername(username);
// }

function checkLoginExist(password, username) {
  let checkPassExist = false;
  let checkNameExist = false;
  userInfo.every((e) => {
    checkPassExist = parseInt(e.password) === parseInt(password) ? true : false;
    checkNameExist = e.username === username ? true : false;
    if (checkPassExist && checkNameExist) {
      userId = e.userId;
      return false;
    }
    return true;
  });
  if (checkPassExist && checkNameExist) return { userId: userId };
  else return false;
}

// add new user to the database
async function createUser(
  username,
  password,
  name,
  description,
  location,
  phonenumber,
  isVendor
) {
  try {
    await userRepository.addUser(
      username,
      password,
      name,
      description,
      location,
      phonenumber,
      isVendor
    );
  } catch (error) {
    return false;
  }
  return true;
}

module.exports = {
  checkLoginExist,
  createUser,
};
