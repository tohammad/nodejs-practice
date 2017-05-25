var express = require('express');
var app = express();
var myMiddleware = require("./myMiddleware");

/*
app.get("*", function(req, res, next){
    //res.status = 404;
    next("Not found!");
});

// error handling middleware

app.use(function(err, req, res, next){
    if(res.status == 404) {
        res.send("error handling middleware");
    }
    else {
        res.send(err);
    }
    next();
});
*/
app.listen(3000, function () {
    console.log("Application Started");
});

