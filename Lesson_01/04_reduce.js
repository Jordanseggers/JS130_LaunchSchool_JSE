function reduce (things, reducerFunc, accum) {
  if (accum) {
    accum = accum;
    for (let i = 0; i < things.length; i+= 1) {
      accum = reducerFunc(accum, things[i]);
    }
  } else {
    accum = things[0];
    for (let i = 1; i < things.length; i+= 1) {
      accum = reducerFunc(accum, things[i]);
    }
  }
  return accum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]