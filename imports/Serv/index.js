//const isEven = require("./arreglos.js") //Option 1
//console.log(isEven(2));

/* 
const arreglos = require("./arreglos.js") //Option 2

console.log(arreglos.isEven(2));
console.log(arreglos.ascendingOrderArray([5, 8, 20, 7]));
console.log(arreglos.isPrime(5));
 */

const {
	isEven,
	ascendingOrderArray,
	isPrime
} = require("./arreglos.js") //Option 3

console.log(isEven(2));
console.log(ascendingOrderArray([5, 8, 20, 7]));
console.log(isPrime(5));