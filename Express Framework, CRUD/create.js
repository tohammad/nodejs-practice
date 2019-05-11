var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");    // get json 
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/api/users/create", function(req, res) {
    console.log(req.body);
    users.push(req.body);
    res.send(users);
});

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
