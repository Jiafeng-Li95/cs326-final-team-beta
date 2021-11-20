class LikeRepository {
    constructor(db) {
        this.db = db;
        this.createTable();
    }

    //create table
    async createTable() {
        return await this.db.none(`CREATE TABLE IF NOT EXISTS likeInfo(
          vendor_id serial PRIMARY KEY,
          like_number varchar(255) NOT NULL 
      )`);
    }

    async dropTable() {
        return await this.db.none(`DROP TABLE likeInfo`);
    }

    //create a new like Information
    async addLike(vendor_id, like_number) {
        return await this.db.none(
            "INSERT INTO likeInfo (vendor_id, like_number) VALUES(${vendor_id},${like_number})",
            {
                vendor_id: vendor_id,
                like_number: like_number
            }
        );
    }

    //return like Information by speicifed vendor id
    async getLikeInfoByVendorId(id) {
        return await this.db.oneOrNone(
            "SELECT * FROM likeInfo WHERE vendor_id = $1", id
        );
    }

    //get all like information
    // async getAllLikeInfo() {
    //     return await this.db.any(
    //         "SELECT * FROM likeInfo"
    //     );
    // }

    //update like information(For vendor)
    async updateLikeInfo(vendor_id, like_number) {
        return await this.db.one(
            "UPDATE likeInfo SET like_number = $1 WHERE vendor_id = $2",
            [like_number, vendor_id]
        );
    }
}

module.exports = LikeRepository;


//UPDATE userInfo SET name = '$1',description = '$2',location = '$3', phoneNumber = '$4' WHERE username = '123';