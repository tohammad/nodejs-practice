// open 10 tabs with http://localhost:3000 and see activity/resource monitor

var fs = require('fs');
var http = require('http');
var file = './videos/sample.mp4';
http.createServer((req, res) =>  {
    fs.readFile(file, (error, data) => {
        if(error) {
            console.log('error occured: ', error);
        }
        res.writeHeader(200, {'Content-Type': 'video/mp4'});
        res.end(data);
    })
}).listen(3000, ()=> console.log('buffer - http://localhost:3000'));