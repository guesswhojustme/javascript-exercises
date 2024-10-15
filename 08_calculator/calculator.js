const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  return array.reduce((total, acc) => total + acc, 0);
};

const multiply = function(array) {
  return array.reduce((total, acc) => total * acc, 0);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2)
};

const factorial = function(num) {
  let product = 1;
  for(let i = num; i > 0; i--){
      product *= i
  };
  return product;
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
