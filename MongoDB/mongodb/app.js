var express = require('express');  // calling the module
var app = express();    // creating an instance
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var dbPath = "mongodb://localhost/myuserapp";
var db = mongoose.connect(dbPath);   // connect with database

// check db connection is opened
mongoose.connection.once('open', function(){
    console.log('database open connection succeeded');  
});

app.use(bodyParser.json({limit:'10mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb', extended:true}));

var Blog = require('./blogModel');

// get all users
app.get("/blogs", function(req, res){
    Blog.find(function (err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

});

// get one user
app.get("/users/:name", function(req, res) {
    Blog.findOne({'name' : req.params.name}, function (err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });

});

// update user details
app.put("/users/:id", function(req, res) {
    var update = req.body;
    //console.log(update);
    //console.log(req.params.id);
    Blog.findOneAndUpdate({'name': req.params.id}, update, {new:true}, function (err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

// update user details
app.delete("/users/:id", function(req, res) {
    Blog.remove({'name': req.params.id}, function (err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

// create a new user
app.post("/users/create", function(req, res){
    console.log(req.body.name);
    var newBlog = new Blog({
        heading: req.body.heading,
        subHeading: req.body.subHeading
    });

    newBlog.save(function (err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});


// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
