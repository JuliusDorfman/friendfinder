const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const app = express();

// When to name response and when to name request?

app.get("/api/friends", function(err, res){
	if (err) throw err;
	res.json()
});

app.post("/api/friends", function(err, res){
	if (err) throw err;
	
});