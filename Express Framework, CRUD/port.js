var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");

app.get('/api/employees', function (req, res) {
  res.send(users);
});

app.get('/api/employees/:empId', function (req, res) {
  res.send("Employee ID is: " + req.params.empId);
});

// listening on a port
const port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log(`app listening on port ${port}`);
});


