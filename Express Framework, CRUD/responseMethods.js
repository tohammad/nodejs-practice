var express = require('express');  // calling the module
var app = express();    // creating an instance
var users = require("./users.json");

// res.append
app.get('/', function (req, res) {
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
   res.send("Root Route!!");
});

// res.attachment
app.get('/attachment', function (req, res) {
   res.attachment("./Express Framework, CRUD/users.json");
});

// res.cookie
app.get('/cookie', function (req, res) {
    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.end();
 });


// listening on a port

app.listen(3000, function () {
    console.log("app listening on port 3000");
});


