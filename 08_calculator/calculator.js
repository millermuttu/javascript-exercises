const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce(function(total, item){
    return total + item;
  },0)
};

const multiply = function(arr) {
  return arr.reduce(function(total, item){
    return total * item;
  },1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	return (num==0) ? 1 : num*factorial(num-1);
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
