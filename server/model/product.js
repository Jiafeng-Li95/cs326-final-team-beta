class ProductRepository {
  constructor(db) {
    this.db = db;
    this.createTable();
  }

  //create table
  async createTable() {
    return await this.db.none(`CREATE TABLE IF NOT EXISTS product(
        id serial PRIMARY KEY,
        name varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        userId int not null
    )`);
  }

  async dropTable() {
    return await this.db.none(`DROP TABLE product`);
  }

  async addProduct(product) {
    return await this.db.none(
      "INSERT INTO product (name, description, userId) VALUES(${userId},${name},${userId})",
      {
        name: product.name,
        description: product.description,
        userId: product.userId,
      }
    );
  }

  async findProductByProductId(id) {
    return await this.db.oneOrNone("SELECT * FROM product WHERE id =$1", id);
  }

  //if id is not delete correct using `+id` instead of `id`
  async removeProduct(id) {
    return await this.db.result(
      "DELETE FROM product WHERE id =$1",
      id,
      (r) => r.rowCount
    );
  }

  //return all products by speicifed id of user
  async findProductsByUserId(userId) {
    try {
      let products = await this.db.any(
        "SELECT * FROM product WHERE userId = $1 ",
        userId
      );
      products.length > 0 ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async updateProduct(product) {
    try {
      return await this.db.result(
        "UPDATE product SET name= $1, description = $2 WHERE id = $3",
        [product.name, product.description, product.id],
        (r) => r.rowCount
      );
    } catch (error) {
      return false;
    }
  }
}

module.exports = ProductRepository;
