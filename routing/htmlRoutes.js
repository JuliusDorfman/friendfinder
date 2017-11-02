const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const app = express();


// module.exports = function(app) {

//     // GET for survey Pages
//     app.get("/survey", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/survey.html"));
//     });


//     // Catch All Page for incomplete URLs
//     app.get("*", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/home.html"));
//     });

// };