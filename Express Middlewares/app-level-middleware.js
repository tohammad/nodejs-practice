var express = require('express');
var app = express();
var myMiddleware = require("./myMiddleware");

var myLogger = function(req, res, next) {
    console.log("Time of request is : " + Date.now());
    console.log("Request url is : " + req.originalUrl);
    console.log("Request ip address is : " + req.ip);

    // store gloal variable in request object
    req.email   =  "tohammad@gmail.com";
    next();
}

app.use(myLogger);
app.get('/', function (req, res) {
    res.send("This is a sample Application");
});

app.get('/normal/route', function (req, res) {
    res.send("This is normal route acccessile to everyone");
});

app.get('/restricted/route', myMiddleware.ageFilter, function (req, res) {
    res.send("This is restricted route only acccessile to 18 and above, your age is: " + req.age  +  " email is : "+  req.email);
});

app.listen(3000, function () {
    console.log("Application Started");
});

