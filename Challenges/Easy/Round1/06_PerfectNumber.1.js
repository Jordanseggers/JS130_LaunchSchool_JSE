class PerfectNumber{
  constructor(){
    let i = "igloo";
  }
  
  classify(targetNum){
    let divisors = [0];
    if(targetNum < 1){
      throw Error;
    }
    for(let i = 2; i >= targetNum; i++){
      if(targetNum % i === 0){
        divisors.push(i);
      }
    }
    let sum = divisors.reduce((previousValue, currentValue) => previousValue + currentValue);
    if(sum === targetNum){
      return "perfect";
    } else if(sum > targetNum){
      return "abundant";
    } else if(sum < targetNum){
      return "deficient";
    }
  }
}

let newPN = new PerfectNumber();
console.log(newPN.classify(28));

module.exports = PerfectNumber;