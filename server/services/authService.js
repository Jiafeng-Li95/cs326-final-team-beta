//put this at end of the this file
//remember add the function inside this {}

function checkNameExist(userInfo, username) {
    let checkNameExist = false;
    userInfo.forEach(e => {
        checkNameExist = e.username === username ? true : false;
    })
    if (checkNameExist) return true;
    else return false;
}

function checkLoginExist(userInfo, password, username) {
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

module.exports = {
    checkNameExist,
    checkLoginExist
};
