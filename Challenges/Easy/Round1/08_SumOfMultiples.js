"use strict";

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples;
  }

  to (naturalNum) {
    return SumOfMultiples.to(naturalNum, this.multiples);
  }
}

SumOfMultiples.to = function(naturalNum, mult) {
  let collectiveMultiples = [0];
  let multiples;
  if (mult) {
    multiples = mult;
  } else {
    multiples = [3, 5];
  }
  multiples.forEach(multiple => {
    for (let idx = multiple; idx < naturalNum; idx += multiple) {
      if (!collectiveMultiples.includes(idx)) {
        collectiveMultiples.push(idx);
      }
    }
  });
  let sum = collectiveMultiples.reduce((prev, curr) => prev + curr);
  return sum;
};

module.exports = SumOfMultiples;