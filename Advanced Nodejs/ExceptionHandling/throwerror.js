function anotherThing() {
    throw new Error('uff');
}

function oneThing() {
    anotherThing();
}


function init() {
    try {
        oneThing();
    }
    catch(e) {
        console.log(e);
    }
}




init();