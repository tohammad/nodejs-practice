 var exports = module.exports = {}; //declare a module
 exports.add = function (num1, num2) {
    console.log(num1 + num2);
    return String(num1 + num2);
 }

  exports.subtract = function (num1, num2) {
    console.log(num1 - num2);
    return String(num1 - num2);
 }

  exports.multiply = function (num1, num2) {
    console.log(num1 * num2);
    return String(num1 * num2);
 }