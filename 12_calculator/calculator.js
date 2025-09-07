const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, number)=> sum + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current)=> sum * current, 1);
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
	let temp = 1;
  for (let i = a; i > 0; i--){
    temp *= i
  }
  return temp;
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
