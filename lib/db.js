var mysql = require("mysql");

var db_config = {
  host: "us-cdbr-east-02.cleardb.com",
  user: "b67456d4bbec5d",
  password: "bce318a9",
  database: "heroku_a4275d67572b90d",
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on("error", function (err) {
    console.log("Database error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;
