function getData() {
    return Promise.reject('Do something');
}

function modifyData() {
    console.log('modify data');
}


function sendData() {
    console.log('send data');
}


getData()
    .then(modifyData)
    .then(sendData)
    .catch((e) => {
        console.log(e);
    })
    .then(modifyData)