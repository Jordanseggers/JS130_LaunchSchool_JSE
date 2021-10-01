"use strict";

class PerfectNumber {};

PerfectNumber.classify = function (num){
  this._validate(num);
  let divisors = this._getDivisors(num);
  let sumOfDivisors = divisors.reduce((previousValue, currentValue) => previousValue + currentValue);
  if(sumOfDivisors > num) {
    return "abundant";
  } else if (sumOfDivisors === num) {
    return "perfect";
  } else if (sumOfDivisors < num) {
    return "deficient";
  }
};

PerfectNumber._getDivisors = function (num) {
  let divisors = [];
  for(let i = 1; i < num; i++) {
    if(num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

PerfectNumber._validate = function(num){
  if (Math.sign(num) === -1) {
    throw Error("Use a positive number");
  }
};

//console.log(PerfectNumber.classify(24));

module.exports = PerfectNumber;