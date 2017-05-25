function myFunc1() {
    console.log('hey');
}

myFunc1();
function myFunc2(fn) {
    fn();
}

myFunc2(myFunc1);