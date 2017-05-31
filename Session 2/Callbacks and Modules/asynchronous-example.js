// asynchronous programming


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


var prepareOrderForMaggi = function(client) {
    console.log("Preparing order, this will take some time");
    setTimeout(function() {
        console.log("Order is prepared " + client +", please take");
    },2000);   // wait for 10 secs
};





placeOrderCanWait("manish", prepareOrderForMaggi);
placeOrderCanWait("hammad", prepareOrder);
placeOrderCanWait("manoj", prepareOrder);
placeOrderCanWait("sandeep", prepareOrder);



