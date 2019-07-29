var delay = (seconds) => new Promise((resolves, rejects) => {
    rejects(new Error('aaa'));

});

delay(1).then(console.log)
.catch((error) => console.log(error.message));

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error)