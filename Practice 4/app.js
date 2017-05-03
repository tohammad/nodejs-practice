var express = require('express');
var app = express();
var mathLib = require('./mathModule');

app.get('/', function(req, res) {
    res.send("This is a sample Application");
})

app.get('/calculation/:num1/:num2/:operation', function(req, res) {
    if(req.params.operation == 'add') {
        res.send(mathLib.add(Number(req.params.num1), Number(req.params.num2)));
    }
});

app.listen(3000, function() {
    console.log("Application Started");
});