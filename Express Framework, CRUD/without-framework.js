const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('raw response');
        res.end();
    }

    if(req.url === '/api/employees/:empId') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000');