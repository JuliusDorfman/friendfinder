const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const app = express();


module.exports = function(app) {

    app.get("/friends", function(req, res) {
        res.sendfile(path.join(__dirname, "../data/friends.js"))
    });

}