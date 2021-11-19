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
    async addUser(userid) {
        return await this.db.none(
            "INSERT INTO userInfo (userid, numclicked) VALUES(${userid},${numclicked})",
            {
                userid: userid,
                numclicked: 0
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
    async updateViewInfo(id) {
        return await this.db.none(
            "UPDATE viewinfo SET numclicked = numclicked+1 WHERE userid = $1",
            id
        );
    }
}

module.exports = ViewRepository;