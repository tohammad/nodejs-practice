var fs = require('fs');
var {promisify} = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);

Promise.all([
    writeFile('readme.md', 'Hey hammmad'),
    writeFile('readme.txt', 'Hey hammmad'),
    writeFile('readme.json', '{ "message" : "Hey hammmad"}')
]).then(() => readdir(__dirname))
.then(console.log);
