require("dotenv").config();

let options = {
  error: function (error, e) {
    if (e.cn) {
      // A connection-related error;
      console.log("Connection-related error:", e.cn);
      console.log("EVENT:", error.message);
    }
  },
};

const pg = require("pg-promise")(options);

let config = {
  host: process.env.POSTGRES_HOST || "localhost",
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: true,
};

const db = pg(config);

db.connect()
  .then(function (obj) {
    obj.done(); // success, release connection;
  })
  .catch(function (error) {
    console.log("ERROR:", error.message);
  });

module.exports = db;
