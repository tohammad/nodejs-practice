var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");    // get json 
var bodyParser = require("body-parser");

app.use(bodyParser.json({limit:'10mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb', extended:true}));

app.put("/users/edit", function(req, res) {
    for (var i=0; i<users.length; i++) {
        if (users[i].name == req.body.name) {
            users[i].age = req.body.age;
            break;
        }
    }
    res.send(users);
});

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});