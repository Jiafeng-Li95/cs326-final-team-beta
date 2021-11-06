class ProductRepository {
  constructor(db) {
    this.db = db;
    this.createTable();
  }

  //create table
  async createTable() {
    return this.db.none(`CREATE TABLE IF NOT EXISTS product(
        id serial PRIMARY KEY,
        name varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        userId int not null
    )`);
  }

  async dropTable() {
    return this.db.none(`DROP TABLE product`);
  }

  async addProduct(product) {
    return this.db.one(
      "INSERT INTO product (name, description, userId) VALUES(${userId},${name},${userId})",
      {
        name: product.name,
        description: product.description,
        userId: product.userId,
      }
    );
  }

  //if id is not delete correct using `+id` instead of `id`
  async removeProduct(id) {
    return this.db.result(
      "DELETE FROM product WHERE id =$1",
      id,
      (r) => r.rowCount
    );
  }

  //return all products by speicifed id of user
  async findProductsByUserId(userId) {
    return this.db.oneOrNone(
      "SELECT * FROM products WHERE userId = ${userId} ",
      userId
    );
  }
}

module.exports = ProductRepository;
