const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...numbers]) {
	let result = 0;
  for(let i = 0; i <numbers.length ; i++) {
    result = result + numbers[i];
  }
  return result;
};

const multiply = function([...numbers]) {
	let result = 1;
  for(let i = 0; i <numbers.length ; i++) {
    result = result * numbers[i];
  }
  return result;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let result = 1;
  for(let i = a; i >= 1 ; i--) {
    result = result * i;
  }
  return result;
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
