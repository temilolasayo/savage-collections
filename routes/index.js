var express = require("express");
var router = express.Router();
var dbConn = require("../lib/db");

/* Home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Savage Collections | Register" });
});

// add a new user to the database
router.post("/index", function (req, res, next) {
  let name = req.body.name.trim();
  let email = req.body.email.trim();
  let password = req.body.password.trim();
  let errors = false;

  if (name.length === 0 || email.length === 0) {
    errors = true;

    // set flash message
    req.flash("error", "Please enter name and email");
    // render to add.ejs with flash message
    res.render("index", {
      name: name,
      email: email,
      password: password,
    });
  }

  // if no error
  if (!errors) {
    var form_data = {
      name: name,
      email: email,
      password: password,
    };
    let selectQuery = "SELECT * FROM `scusers` WHERE email = '" + email + "'";

    dbConn.query(selectQuery, function (err, result) {
      //if(err) throw err
      if (result.length > 0) {
        console.log(email);
        req.flash("error", "Email exists");
        res.redirect("/");
      } else {
        dbConn.query("INSERT INTO scusers SET ?", form_data, function (
          err,
          result
        ) {
          //if(err) throw err
          if (err) {
            req.flash("error", "Email exists");
          } else {
            req.flash("success", "Account created successfully");
            res.redirect("/");
          }
        });
      }
    });
    // dbConn.destroy();
  }
});

module.exports = router;
