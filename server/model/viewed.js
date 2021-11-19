class ViewRepository {
    constructor(db) {
        this.db = db;
        this.createTable();
    }

    //create table
    async createTable() {
        return await this.db.none(`CREATE TABLE IF NOT EXISTS viewinfo(
          userid int PRIMARY KEY,
          numclicked int not null
        )`);
    }

    async dropTable() {
        return await this.db.none(`DROP TABLE user`);
    }

    //create a new user Information
    async addUser(pv) {
        return await this.db.none(
            "INSERT INTO userInfo (userid, numclicked) VALUES(${userid},${numclicked})",
            {
                userid: pv.userid,
                numclicked: pv.numclicked
            }
        );
    }

    //return user Information by speicifed id
    async getNumClickedById(id) {
        return await this.db.oneOrNone(
            "SELECT * FROM viewinfo WHERE userid = $1",
            id
        );
    }

    //update user information(For vendor)
    async updateViewInfo(pv) {
        return await this.db.none(
            "UPDATE viewinfo SET numclicked = $1 WHERE userid = $2",
            [pv.numclicked, pv.userid]
        );
    }
}

module.exports = ViewRepository;