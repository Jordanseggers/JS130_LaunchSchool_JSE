"use strict";

class SumOfMultiples {
  constructor(...multiples){
    this.multiples = multiples;
  }
  
  to (naturalNum){
    return SumOfMultiples.to(naturalNum, this.multiples);
  }
}

SumOfMultiples.to = function(naturalNum, mult){
  let collectiveMultiples = [0];
  let multiples;
  if(mult) {
    multiples = mult;
  } else {
    multiples = [3, 5];
  }
  multiples.forEach(multiple => {
    for(let i = multiple; i < naturalNum; i+= multiple){
      if(!collectiveMultiples.includes(i)){
        collectiveMultiples.push(i);
      }
    }
  });
  let sum = collectiveMultiples.reduce((prev, curr) => prev + curr);
  return sum;
};



let obj = new SumOfMultiples(5, 6, 8);
console.log(obj.to(150));

module.exports = SumOfMultiples;