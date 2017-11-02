const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const api = require(".")
var app = express();

var PORT = 3000;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// WANT TO BRING TO HTMLROUTES
// --------------------------------------------------------------------------------------
// GET for survey Pages
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});


// Catch All Page for incomplete URLs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});
// --------------------------------------------------------------------------------------


require("./routing/apiRoutes");
require("./routing/htmlRoutes");

app.listen(PORT, function(err, res) {
    if (err) {
        throw err
        console.log(res);
    }
    console.log(res);
    console.log("App listening on PORT: " + PORT);
});