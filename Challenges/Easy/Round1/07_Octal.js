"use strict";

class Octal {
  constructor(octalNum) {
    this.num = octalNum;
  }

  toDecimal() {
    if (Octal.isNotValid(this.num)) {
      return 0;
    }
    let digits = [...String(this.num)];
    let sumThese = [];
    let exponent = 0;
    for (let idx = digits.length - 1; idx > -1; idx--) {
      let currentPower = Math.pow(8, exponent);
      sumThese.push(digits[idx] * currentPower);
      exponent += 1;
    }
    return sumThese.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}

Octal.isNotValid = function(octalNum) {
  let match = String(octalNum).match(/[89]/);
  return isNaN(Number(octalNum)) || match !== null;
};

module.exports = Octal;