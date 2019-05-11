var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");

app.get('/api/employees', function (req, res) {
  res.send(users);
});

// Route Parameters
app.get('/api/employees/:empId', function (req, res) {
  res.send("Employee ID is: " + req.params.empId);
});


// Route Parameters
app.get('/api/employeeByName/:name', function (req, res) {
    var result = getEmployeeByName(req.params.name);
    res.send(result);
  });

  function getEmployeeByName(name) {
    return users.filter(
        function(data){ return data.name == name; }
    );
  }
  

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});


