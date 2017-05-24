var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/file1.txt');

var writable = fs.createWriteStream(__dirname + '/file2.txt');

var compressed = fs.createWriteStream(__dirname + '/file3.txt.gz');
var gzip = zlib.createGzip();
readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);