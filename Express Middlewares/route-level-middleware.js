var express = require('express');
var app = express();
var myMiddleware = require("./myMiddleware");


app.get('/', function (req, res) {
    res.send("This is a sample Application");
});

app.get('/normal/route', function (req, res) {
    res.send("This is normal route acccessile to everyone");
});

app.get('/restricted/route', myMiddleware.ageFilter, function (req, res) {
    res.send("This is restricted route only acccessile to 18 and above, your age is: " + req.age);
});

app.listen(3000, function () {
    console.log("Application Started");
});