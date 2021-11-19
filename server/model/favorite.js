class FavoriteRepository {
  constructor(db) {
    this.db = db;
    this.createTable();
  }

  //create table
  async createTable() {
    return await this.db.none(`CREATE TABLE IF NOT EXISTS favorite(
          id serial PRIMARY KEY,
          savedUserId int,
          productId int,
          FOREIGN KEY(productId) REFERENCES product(id)
      )`);
  }

  async dropTable() {
    return await this.db.none(`DROP TABLE favorite`);
  }

  async addFavorite(productId, savedUserId) {
    try {
      await this.db.none(
        "INSERT INTO favorite (productId,savedUserId) VALUES(${productId},${savedUserId})",
        {
          productId: productId,
          savedUserId: savedUserId,
        }
      );

      return true;
    } catch (error) {
      console.log("addFavorite error: " + error);
      return false;
    }
  }

  //if id is not delete correct using `+id` instead of `id`
  async removeFavorite(productId) {
    return await this.db.result(
      "DELETE FROM favorite WHERE id =$1",
      productId,
      (r) => r.rowCount
    );
  }

  //return all products by speicifed id of user
  async findFavoritesByUserId(savedUserId) {
    try {
      let favorites = await this.db.any(
        "SELECT * FROM favorite,product WHERE favorite.productId = product.id AND savedUserId = $1 ",
        savedUserId
      );
      return favorites.length > 0 ? favorites : null;
    } catch (err) {
      return null;
    }
  }
}

module.exports = FavoriteRepository;
