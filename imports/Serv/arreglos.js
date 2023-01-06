function isEven(number) {
	return number % 2 === 0;
}

function ascendingOrderArray(array) {
	return array.sort(function (a, b) {
		return a - b;
	});
}

function isPrime(number) {
	var i;
	for (i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true
}

//module.exports = isEven;  //Option 1

module.exports = { //Option 2
	isEven,
	ascendingOrderArray,
	isPrime
};