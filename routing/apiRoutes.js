const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
var app = express();
var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
    });

}