// promisify is a function which we can use to convert callback functions into promises

var {promisify} = require('util');

var delay = (seconds, callback) => {
    if(seconds > 3) {
        callback(new Error(`${seconds} seconds is too long`));
    } else {
        setTimeout(() => 
        callback(null, `the ${seconds} delay is over`)
        );
    }
}
var promiseDelay = promisify(delay);
promiseDelay(4)
.then(console.log)
.catch((error) => console.log(error.message)); 