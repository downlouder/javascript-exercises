const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = 0;
  if (toString.call(arr) !== "[object Array]") {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

const factorial = function(fac) {
	let result = 1;
  // let num = fac;
  if (fac === 0) {
    return 1;
  }
  for (let i = 1; i <= fac; i++) {
    result *= i;
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
