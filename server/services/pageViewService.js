const db = require("../db");
const ViewRepository = require("../model/viewed");
const viewRepository = new ViewRepository(db);

//add new page view record for a new vendor
async function addPVRecord(pv){
    await viewRepository.addUser(pv);
    return true;
}

//get page view by id
async function getPageViewById(id){
    return await viewRepository.getNumClickedById(id);
}

//update page view by id
async function updatePageViewById(pv){
    return await viewRepository.updateViewInfo(pv);
}

module.exports = {
    getPageViewById,
    updatePageViewById,
    addPVRecord
};