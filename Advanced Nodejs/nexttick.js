function cb(){
  console.log('Processed in next iteration');
}
function cb1(){
  console.log('Processed  by settimeout');
}
setTimeout(cb1, 0);
process.nextTick(cb);
console.log('Processed in the first iteration');