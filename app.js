const express = require("express");
// must log in console "npm i -s" to install package
const hbs = require("hbs"); // aka "handlebars"
// console command "npm i -s hbs"
const path = require("path");
const sql = require("./utils/sql");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
}) // NEED THIS FOR HOMEWORK

/* for homework
need public => (js, css, images) & views folders
do not need to use express or handlebars for homework - just serve up html file
homework must be served on heroku
hand in heroku & github links in submission 
see specs for more info
due next Thursday, email Trevor if you want to come in even though there is no class for help next week */

app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("home", { homemessage: "hey there!", bio: "just anything" });
})

app.get("/users", (req, res) => {
  // get user data when you hit this route

  // try a database connection

  // if the connetion fails, log errors to the console and quit

  sql.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }
    let query = "SELECT * FROM tbl_card";

    sql.query(query, (err, rows) => {
      // we're done with our DB connection
      connection.release();
      // if something broke, quit and show error message
      if (err) { return console.log(err.message); }
      // show me the data!
      console.log(rows);

      res.render("user", rows[0]);
    })
  })
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});


// see more: https://www.npmjs.com/package/mysql#pooling-connections