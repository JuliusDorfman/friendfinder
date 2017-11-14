const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 3000;    

console.log('PORT', PORT);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/HTMLRoutes")(app);



app.listen(PORT, function(err, res) {
    if (err) {
        throw err
        console.log(res);
    }
    console.log("App listening on PORT: " + PORT);
});