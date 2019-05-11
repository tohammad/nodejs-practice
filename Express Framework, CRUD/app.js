var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");
// root route
app.get('/', function (req, res) {
  res.download("./simpleGreeting.js");
});

app.get('/api/employees', function (req, res) {
  res.send("Employee ID is: " + req.params.empId);
});

app.get('/api/employees/:empId/:age', function (req, res) {
  res.send("Employee ID is: " + req.params.empId);
});

app.get('*', function (req, res) {
  res.send("Anything!!");
});


var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
  }
  
  var cb2 = function (req, res) {
    //res.send('Hello from C!');
    res.download("./Express Framework, CRUD/simpleGreeting.js");
  }
  
  app.get('/example/c', [cb0, cb1, cb2]);

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});


