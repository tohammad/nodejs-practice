var express = require('express'); 
var app = express();
var http = require('http').Server(app); // initialize a new instance of socket.io by passing the http (the HTTP server) object.
var io = require('socket.io')(http)
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen on the connection event for incoming sockets, and I log it to the console.
io.on('connection', function(socket) {
    /*
    console.log('a user connected');
    socket.on('disconnect', function(){
    console.log('user disconnected');

  });
  */
  //socket.broadcast.emit('hi');
   socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    //socket.broadcast.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});