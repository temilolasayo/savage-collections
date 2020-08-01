var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-east-02.cleardb.com",
  user: "b67456d4bbec5d",
  password: "bce318a9",
  database: "heroku_a4275d67572b90d",
  debug: false,
});
module.exports = pool;
