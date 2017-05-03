// synchronous programming


var placeOrder = function(client) {
    console.log("I am " + client);
};

var placeOrderCanWait = function(client, callbackFunction) {
    console.log("I am " + client + " and i would like to place the order, but I can wait");
    callbackFunction(client);
};

var prepareOrder = function(client) {
    console.log("Preparing order, this will take some time");
    setTimeout(function() {
        console.log("Order is prepared " + client +", please take");
    },10000);   // wait for 10 secs
};




placeOrder("hammad");
//prepareOrder();

placeOrderCanWait("sundeep", prepareOrder);
placeOrder("akshan");


