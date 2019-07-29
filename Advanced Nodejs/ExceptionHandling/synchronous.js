function doAthing() {
    byDoingSomethingElse();
}

function byDoingSomethingElse() {
    throw new Error('Uh oh!');
}

function init() {
    try {
        doAthing();
    } catch(e) {
        console.log(e);
        // [Error: Uh oh!]
    }
}

init();