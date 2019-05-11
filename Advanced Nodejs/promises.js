var delay = (seconds) => new Promise((resolves, rejects) => {
    rejects(new Error('aaa'));

});

delay(1).then(console.log)
.catch((error) => console.log(error.message));