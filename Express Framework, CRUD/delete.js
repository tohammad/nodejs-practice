
var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");    // get json 
var bodyParser = require("body-parser");

app.use(bodyParser.json({limit:'10mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb', extended:true}));

app.delete("/users/delete", function(req, res) {
   removeItem(users,'name', req.body.name);
   res.send(users);
});

// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});

function removeItem(obj, property, value) {
    obj.forEach(function(result, index) {
    if(result[property] === value) {
      //Remove from array
      obj.splice(index, 1);
    }    
  });
}