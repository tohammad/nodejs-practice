function myFunc1() {
    console.log('we are first class functions!!');
}

myFunc1();
function myFunc2(cb) {
    cb();
}

myFunc2(myFunc1);