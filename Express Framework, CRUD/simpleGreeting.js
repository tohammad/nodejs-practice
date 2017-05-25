var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");    // get json 

// route
app.get('/', function (req, res) {
   res.send("Good Morning!!");
});

app.get('*', function (req, res) {
    res.send("Anything!!");
});

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});


