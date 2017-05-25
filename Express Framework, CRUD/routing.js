var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");    // get json 
// route
app.get('/', function (req, res) {
    res.send(users);
});

app.get('/users/:userName', function(req, res) {
    console.log(req);
    console.log(req.params);
    console.log(req.params.userName);
    var foundUser = 'user not found!!';
    for(let u in users) {
         console.log(users[u].name);
        if(users[u].name === req.params.userName) {
            foundUser = users[u];
        }
    }
    console.log(foundUser);
    res.send(foundUser);

});

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});


