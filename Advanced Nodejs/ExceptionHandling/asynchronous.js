function getData() {
    return Promise.resolve('Do some stuff');
}

function changeDataFormat(){
    return Promise.reject('errr');
}

function storeData(){
    console.log('store');
}

getData()
    .then(changeDataFormat)
    .then(storeData)
    .catch((e) => {
        console.log(e);
    })