// class UserRepository {
//   constructor(db) {
//     this.db = db;
//     this.createTable();
//   }

//   //create table
//   async createTable() {
//     return this.db.none(`CREATE TABLE IF NOT EXISTS user(
//           id serial PRIMARY KEY,
//           username varchar(255) NOT NULL,
//           password varchar(255) NOT NULL,
//           name varchar(255),
//           description varchar(255),
//           location varchar(255),
//           phoneNumber varchar(255),
//           isVendor boolean
//       )`);
//   }

//   async dropTable() {
//     return this.db.none(`DROP TABLE user`);
//   }

//   async addUser(product) {}

//   //if id is not delete correct using `+id` instead of `id`
//   async removeProduct(id) {}

//   //return all products by speicifed id of user
//   async findProductsByUserId(userId) {}
// }

// module.exports = UserRepository;
