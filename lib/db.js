var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b67456d4bbec5d",
  password: "bce318a9",
  database: "heroku_a4275d67572b90d",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected..!");
  }
});

module.exports = connection;
