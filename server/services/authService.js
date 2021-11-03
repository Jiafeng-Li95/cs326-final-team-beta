//put this at end of the this file
//remember add the function inside this {}

const userInfo = require("../faker_data");
let userId = 0;

function checkNameExist(username) {
    let checkNameExist = false;
    userInfo.forEach(e => {
        checkNameExist = e.username === username ? true : false;
    })
    if (checkNameExist) return true;
    else return false;
}

function checkLoginExist(password, username) {
    let checkPassExist = false;
    let checkNameExist = false;
    userInfo.every(e => {
        checkPassExist = parseInt(e.password) === parseInt(password) ? true : false;
        checkNameExist = e.username === username ? true : false;
        if (checkPassExist && checkNameExist) {
            userId = e.userId;
            return false
        };
        return true;
    })
    if (checkPassExist && checkNameExist) return { userId: userId };
    else return false;
}

function pushUserInfo(username, password, name, description, location, phonenumber, isVendor) {

    userInfo.push({
        username: username,
        password: password,
        name: name,
        description: description,
        location: location,
        phoneNumber: phonenumber,
        isVendor: isVendor,
        userId: userInfo.length
    });

}

module.exports = {
    checkNameExist,
    checkLoginExist,
    pushUserInfo
};
