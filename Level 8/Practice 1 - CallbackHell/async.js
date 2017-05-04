var async = require("async");

async.parallel({

    one: function(callback) {
        setTimeout(function(){
            callback(null,1);
        }, 1000);
    },
    Two: function(callback) {
        setTimeout(function(){
            callback(null,2);
        }, 500);
    }
},
function(err, results) {
console.log(results);


});

