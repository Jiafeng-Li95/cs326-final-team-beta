class UserRepository {
    constructor(db) {
        this.db = db;
        this.createTable();
    }

    //create table
    async createTable() {
        return await this.db.none(`CREATE TABLE IF NOT EXISTS userInfo(
          id serial PRIMARY KEY,
          username varchar(255) NOT NULL UNIQUE,
          password varchar(255) NOT NULL,
          name varchar(255),
          description varchar(255),
          location varchar(255),
          phoneNumber varchar(255),
          isVendor boolean
      )`);
    }

    async dropTable() {
        return await this.db.none(`DROP TABLE user`);
    }

    //create a new user Information
    async addUser(username, password, name, description, location, phoneNumber, isVendor) {
        return await this.db.none(
            "INSERT INTO userInfo (username, password, name, description, location, phoneNumber, isVendor) VALUES(${username},${password},${name},${description},${location},${phoneNumber},${isVendor})",
            {
                username: username,
                password: password,
                name: name,
                description: description,
                location: location,
                phoneNumber: phoneNumber,
                isVendor: isVendor
            }
        );
    }

    //return user Information by speicifed username
    async findProductsByUsername(username) {
        return await this.db.any(
            "SELECT * FROM userInfo WHERE username = $1",
            username
        );
    }
}

module.exports = UserRepository;
