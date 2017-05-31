var Emitter = require('events');
var emtr = new Emitter();

// listener 1
emtr.on('greet', function() {
    console.log('someone greets you');
});

// listener 2
emtr.on('greet', function() {
    console.log('someone greets you again');
});


console.log('whats up');
emtr.emit('greet');