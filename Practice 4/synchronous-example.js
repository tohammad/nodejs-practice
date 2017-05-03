// synchronous programming


var placeOrder = function(order) {
    console.log("Placing order " + order);
}

var prepareOrder = function(order) {
    console.log("Preparing order " + order);
}

var printNumers = function() {
    for(var i = 0; i < 100; i++) {
        console.log(i);
    }
}

placeOrder("pizza");
printNumers();
prepareOrder("pizza");

