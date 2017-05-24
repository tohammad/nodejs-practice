var buffer = new Buffer('abcdef', 'utf-8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
buffer.write('hij');
console.log(buffer.toString());

