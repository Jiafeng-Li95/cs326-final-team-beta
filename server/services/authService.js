//put this at end of the this file
//remember add the function inside this {}

const userInfo = [];

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
        checkPassExist = e.password === password ? true : false;
        checkNameExist = e.username === username ? true : false;
        if (checkPassExist && checkNameExist) return false;
        return true;
    })
    if (checkPassExist && checkNameExist) return true;
    else return false;
}

function pushUserInfo(username, password, name, description, location, phonenumber, isVendor) {
    userInfo.push({
        username: username,
        password: password,
        name: name,
        description: description,
        location: location,
        phonenumber: phonenumber,
        isVendor: isVendor
    });
}

module.exports = {
    checkNameExist,
    checkLoginExist,
    pushUserInfo
};
