const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev * curr, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	return a === 0 || a === 1 ? 1:
  a === 2 ? 2 : factorial(a-1) * a; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
