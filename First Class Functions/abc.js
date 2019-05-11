var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("This is a sample Application");
});

app.listen(3000, function () {
    console.log("Application Started");
});

