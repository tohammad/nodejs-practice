var express = require('express');  // calling the module
var app = express();    // creating an instance

// route
app.get('/', function (req, res) {
   res.send("Good Morning!!");
});



// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});


