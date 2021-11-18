class FavoriteRepository {
  constructor(db) {
    this.db = db;
    this.createTable();
  }

  //create table
  async createTable() {
    return await this.db.none(`CREATE TABLE IF NOT EXISTS favorite(
          id serial PRIMARY KEY,
          productId int,
          FOREIGN KEY(productId) REFERENCES product(id)
      )`);
  }

  async dropTable() {
    return await this.db.none(`DROP TABLE favorite`);
  }

  async addFavorite(product) {
    return await this.db.none(
      "INSERT INTO favorite (productId) VALUES(${productId})",
      {
        productId: product,
      }
    );
  }

  //if id is not delete correct using `+id` instead of `id`
  async removeFavorite(id) {
    return await this.db.result(
      "DELETE FROM favorite WHERE id =$1",
      id,
      (r) => r.rowCount
    );
  }

  //return all products by speicifed id of user
  async findFavoritesById(userId) {
    try {
      let products = await this.db.any(
        "SELECT * FROM favorite WHERE userId = $1 ",
        userId
      );
      return products.length > 0 ? products : null;
    } catch (err) {
      return null;
    }
  }
}

module.exports = FavoriteRepository;
