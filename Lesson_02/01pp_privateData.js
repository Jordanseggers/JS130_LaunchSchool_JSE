function makeCounterLogger(num) {
  return function(num2) {
    if (num > num2) {
      for(let i = num; i >= num2; i -=1) {
        console.log(i);
      }
    } else {
      for(let i = num; i <= num2; i+=1) {
        console.log(i);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);


countlog(2);
