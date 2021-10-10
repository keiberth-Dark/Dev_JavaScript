function trace(str) {
	console.log(Date(Date.now()), str);
}

function warning(str) {
	console.warn(Date(Date.now()), str);
}

function error(str) {
	console.error(Date(Date.now()), str);
}

//export default trace;

export {
	trace,
	warning,
	error
};

//clg